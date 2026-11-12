/**
 * Zemen Technologies Sandbox CI Validator
 * Validates that every contributor profile in contributors/ has valid JSON and required fields.
 */

const fs = require('fs');
const path = require('path');

const contributorsDir = path.join(__dirname, '..', 'contributors');

console.log('--- Zemen Sandbox Profile Validator ---');

if (!fs.existsSync(contributorsDir)) {
  console.error('[Error] contributors/ directory not found.');
  process.exit(1);
}

const files = fs.readdirSync(contributorsDir).filter(f => f.endsWith('.json') && !f.startsWith('_'));

if (files.length === 0) {
  console.warn('[Warning] No active contributor profiles found to validate.');
  process.exit(0);
}

const requiredFields = [
  'name',
  'github_username',
  'role',
  'location',
  'favorite_git_command',
  'bio'
];

let hasErrors = false;

files.forEach(file => {
  const filePath = path.join(contributorsDir, file);
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);

    const missing = [];
    requiredFields.forEach(field => {
      if (!data[field] || typeof data[field] !== 'string' || data[field].trim() === '') {
        missing.push(field);
      }
    });

    if (missing.length > 0) {
      console.error(`[Fail] ${file}: Missing or empty required fields: ${missing.join(', ')}`);
      hasErrors = true;
    } else {
      console.log(`[Pass] ${file}: Profile valid (${data.name} - ${data.role})`);
    }
  } catch (err) {
    console.error(`[Fail] ${file}: Invalid JSON syntax: ${err.message}`);
    hasErrors = true;
  }
});

if (hasErrors) {
  console.error('\n[Result] Validation failed. Please correct the profile issues noted above.');
  process.exit(1);
}

console.log(`\n[Result] All ${files.length} contributor profile(s) validated successfully! Ready for merge.`);
process.exit(0);

