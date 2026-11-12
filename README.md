# Zemen Technologies — Git Practice Sandbox

[![Validation](https://img.shields.io/badge/CI-Automated%20Verification-181614?style=flat-square)](https://github.com/zementechnologies/git-sandbox/actions)
[![Template](https://img.shields.io/badge/Template-Repository-A51C30?style=flat-square)](https://github.com/zementechnologies/git-sandbox)
[![Learning Hub](https://img.shields.io/badge/Guide-Git%20Workflows%20Portal-181614?style=flat-square)](https://zementechnologies.github.io/git-workflows/)

Welcome to the **Zemen Technologies Practice Sandbox**.

This repository is an interactive playground where engineers, new hires, and interns practice branching, writing conventional commits, and submitting pull requests in a safe, risk-free environment.

---

## The Challenge: Add Your Profile to the Team Roster

Your objective is to complete the entire Git feature lifecycle by adding your contributor profile to the `contributors/` directory.

### Step 1: Clone the Sandbox

Open your terminal and clone this repository to your machine:
```bash
git clone https://github.com/zementechnologies/git-sandbox.git
cd git-sandbox
```

### Step 2: Cut a Clean Feature Branch

Never commit directly to `main`. Create your feature branch following the Zemen branch taxonomy:
```bash
git switch -c feat/add-<your-name>
# Example: git switch -c feat/add-samuel-kebede
```

### Step 3: Create Your Contributor Profile

1. Copy the starter template:
```bash
cp contributors/_template.json contributors/<your-github-username>.json
# Example: cp contributors/_template.json contributors/samuelkebede.json
```

2. Open the newly created JSON file in your code editor (e.g., VSCode) and fill in your details:
```json
{
  "name": "Samuel Kebede",
  "github_username": "samuelkebede",
  "role": "Frontend Engineering Intern",
  "location": "Addis Ababa, Ethiopia",
  "favorite_git_command": "git add -p",
  "bio": "Passionate about building responsive, accessible web interfaces."
}
```

### Step 4: Verify Your File Locally

Run the automated validation script to verify your JSON syntax and required fields before committing:
```bash
npm test
```
If you see `[Pass]`, your profile meets all formatting standards.

### Step 5: Stage and Commit Atomically

Review your diff and create a Conventional Commit:
```bash
# Check status
git status -s

# Stage your profile file
git add contributors/<your-github-username>.json

# Commit with a structured Conventional Commit message
git commit -m "feat(contributors): add <your-name> to team roster"
```

### Step 6: Push Your Branch to GitHub

Push your branch upstream to the remote repository:
```bash
git push -u origin feat/add-<your-name>
```

### Step 7: Open Your Pull Request

1. Visit [https://github.com/zementechnologies/git-sandbox](https://github.com/zementechnologies/git-sandbox) in your web browser.
2. Click the green **"Compare & pull request"** button for your branch.
3. Review the PR template checklist and submit your proposal.
4. Watch the automated GitHub Actions CI run tests and verify your contribution!

---

## Verification Rules

The automated continuous integration suite verifies that:
1. The JSON file syntax is valid.
2. All required fields (`name`, `github_username`, `role`, `location`, `favorite_git_command`, `bio`) are non-empty strings.
3. Your branch is cleanly based on `main`.

---

## Reference Material

Need a refresher on Git concepts, branches, or conventional commit rules?
- [Zemen Technologies Git & Workflows Portal](https://zementechnologies.github.io/git-workflows/)
- [Track 00: Git from Scratch Slide Deck](https://zementechnologies.github.io/git-workflows/slides/00-beginner-starter.html)
- [Emergency Runbook](https://zementechnologies.github.io/git-workflows/#runbook)

---

## Facilitation & Questions

If you run into issues, have questions about Git workflows, or need your sandbox PR reviewed and merged, contact the facilitators:
- **Latera Tilahun** — [@Laterat](https://github.com/Laterat)
- **Nahim** — [@nahim13](https://github.com/nahim13)

---

## License

Copyright (c) 2026 Zemen Technologies PLC. Licensed under the MIT License.

