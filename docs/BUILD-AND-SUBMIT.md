# Build, understand and submit

This is a learning workflow, not an extra report for submission. A2 needs the website, repository, README, source assets, validation evidence, progressive Git history and AI declaration (handbook pp. 5-6).

## 1. Review the reference draft

Extract the ZIP. Open the project folder in Visual Studio Code or an approved text editor, then open `index.html` in your browser. Read the three HTML files in order, followed by `css/styles.css`. Use `LEARNING-CHECKS.md` to explain the code aloud. Keep the supplied PDF guide outside the repository unless you specifically want to include it.

Confirm the proposed topic with the lecturer if needed. Replace the student details in README and the declaration. The website does not need to expose your student ID publicly.

## 2. Make the work your own

Choose the audience and course topics yourself. Rewrite the introductory text and one complete course article in your own words. Modify a form field for a clear user need; preserve labels and validation. Explain every retained element and remove anything you cannot justify. If the level of assistance exceeds what the lecturer permits, use the draft only as a learning reference and build your own version under those rules.

## 3. Start a real Git history

Install Git and Visual Studio Code if needed. Open the extracted project folder in VS Code, then Terminal > New Terminal. Set your own Git name and a GitHub-associated email or GitHub-provided no-reply email. Replace the example values below; do not use them literally.

```bash
git init
git branch -M main
git config user.name "YOUR NAME"
git config user.email "YOUR GITHUB EMAIL OR NO-REPLY EMAIL"
git add .
git commit -m "Import AI-assisted A2 draft for review"
```

That first commit honestly records importing the supplied draft. Next, perform real changes and commit them after each actual work session. Example messages, only if the described work really occurred:

```bash
git add index.html courses.html README.md
git commit -m "Rewrite audience and course content after review"
git add contact.html
git commit -m "Refine enquiry questions and explain validation"
git add evidence AI-USE-DECLARATION.md
git commit -m "Record my browser tests and AI contribution"
git log --oneline
```

If you instead build your own implementation from the explanation, commit actual milestones as you build. Do not recreate earlier weeks, backdate commits or manufacture stages by uploading pieces of an already completed site. Git history is evidence of work performed, not a target number of commits.

## 4. Create and connect your GitHub repository

Sign in to your personal GitHub account and create a repository such as `iso229-assessment2`. For the simplest GitHub Pages route and lecturer access, choose Public only after reviewing the files for personal information. If creating it after the local Git steps above, do not initialise another README, licence or .gitignore on GitHub.

Copy the actual HTTPS repository address from GitHub. Replace the entire example address below with it, then run:

```bash
git remote add origin https://github.com/YOUR-USERNAME/iso229-assessment2.git
git push -u origin main
```

Complete GitHub's offered sign-in flow. Do not put passwords or access tokens in your code. For later changes, commit first and then use `git push`. If the account requires a private repository, confirm that your plan and lecturer access support the chosen publishing arrangement.

## 5. Publish through GitHub Pages

In the repository, open Settings > Pages. Under Build and deployment, choose Deploy from a branch, select `main`, choose `/(root)`, then Save. The extracted `index.html` must be directly at the repository root, not inside a second nested project folder. Wait for the deployment to finish and copy the actual URL shown by GitHub; do not guess it.

The usual project URL pattern is `https://YOUR-USERNAME.github.io/iso229-assessment2/`. This is an example only. Paste the real repository and published URLs into README, commit the change and push.

The separately supplied private demonstration is a review aid. It does not fulfil GitHub source-history requirements and may not be accessible to your lecturer.

## 6. Revalidate your final HTML

Open https://validator.w3.org/nu/ and select file upload as the input method. Check `index.html`, `courses.html` and `contact.html` individually. Fix errors, save and repeat until clear. Capture real screenshots showing the filename or URL and result; save them under `evidence/`, for example `index-validation.png`. If a warning cannot reasonably be removed, explain the exact warning, reason and effect in `evidence/VALIDATION.md`.

The supplied JSON responses are genuine checks of the initial draft. They do not validate your later edits. Do not edit old checker messages to make them look current; add or replace evidence with actual new checks.

## 7. Test as a visitor

Complete `evidence/MANUAL-TESTS.md` with actual dates, browser/version, observed result and any fix. Use only fictional form values. Test all three pages, internal links, image loading, the form's required and invalid values, keyboard access and a successful practice submission. Open the final published website and repository in a private/incognito window to verify lecturer access.

## 8. Submit

- GitHub repository URL.
- Published website URL.
- README, complete source files and assets in the repository.
- Validation evidence and explanations for unavoidable warnings, if any.
- Meaningful, truthful progressive Git history.
- Accurate AI Use Declaration.

Follow the LMS instructions for attachments; the handbook does not require a separate A2 written report. Keep a ZIP backup. A video walkthrough is not listed as mandatory in the supplied A2 brief. Check later lecturer announcements before submitting by 11 September 2026, 11:59 pm.

## Suggested remaining sessions

| Session | Focus | Suggested time |
| --- | --- | --- |
| 1 | Confirm theme, read code and initialise Git honestly | 75 minutes |
| 2 | Rewrite content and review semantic structure | 75 minutes |
| 3 | Modify and practise explaining the form | 90 minutes |
| 4 | Validate, test navigation and keyboard behaviour | 75 minutes |
| 5 | Publish, verify access and finish documentation | 90 minutes |
| 6 | Final code explanation, checks and submission | 45 minutes |

Total: about 7.5 focused hours. Adjust to your understanding; do not postpone testing until the deadline.
