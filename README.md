# PNG Digital Skills Hub - ISO229 Assessment 2

PNG Digital Skills Hub is a three-page HTML5 student website developed for
ISO229 Web Design Assessment 2.

The website demonstrates semantic HTML5 structure, accessible navigation,
meaningful content, multimedia, a course comparison table, and an HTML5
enquiry form with browser-based validation.

The project is designed as a fictional educational service for beginners in
Papua New Guinea who want to build practical digital skills for study,
office work and small-business activities.

This project began from an AI-assisted learning draft. I am reviewing,
customising, testing and documenting the website before submission.
AI assistance is disclosed in `AI-USE-DECLARATION.md`.

## Student and submission details

- Student name: **Bill Junior Lagani**
- Student ID: **25576687**
- GitHub username: **Bibs0231**
- GitHub repository URL: **TO COMPLETE after creating your repository**
- Published GitHub Pages URL: **TO COMPLETE after publishing**
- Topic approval: **TO CONFIRM with lecturer if not already approved**
- Due date in the handbook: **11 September 2026, 11:59 pm**

## Purpose and audience

The proposed service helps adult beginners in Papua New Guinea compare introductory digital-skills courses and practise a course enquiry. The target audience includes students, office staff and small business owners. The content is fictional and does not represent a real training provider.

The main user tasks are to understand the service, compare course topics and practice outputs, and complete a clearly labelled enquiry form using test data.

## Pages and files

| File                       | Purpose                                                          |
| -------------------------- | ---------------------------------------------------------------- |
| `index.html`               | Home, intended audience and learning-path image                  |
| `courses.html`             | Three self-contained course articles and a comparison table      |
| `contact.html`             | Contact context and substantial practice enquiry form            |
| `css/styles.css`           | Shared basic typography, colour, spacing and form presentation   |
| `images/learning-path.svg` | Original text-based learning diagram with alternative text       |
| `AI-USE-DECLARATION.md`    | Accurate account of AI assistance plus student completion fields |
| `docs/PROJECT-PLAN.md`     | Purpose, user stories, sitemap and acceptance checks             |
| `docs/BUILD-AND-SUBMIT.md` | Review, Git, publication and submission instructions             |
| `docs/LEARNING-CHECKS.md`  | Code explanations, exercises and model answers                   |
| `evidence/`                | Actual automated checks, source hashes and manual test checklist |

The downloadable assessment package places the website files at its project root. The private demonstration's internal hosting checkout keeps these same public files under `dist/`; that internal hosting arrangement is not needed for GitHub Pages.

## Run locally

1. Extract the ZIP first. Do not open the HTML inside the compressed folder.
2. Open the extracted project folder in Visual Studio Code or an approved text editor.
3. Open `index.html` in a modern browser and follow the navigation links.
4. Save an edit in the editor, then refresh the browser to see the change.

No framework, package installation, JavaScript or build command is needed. A local server is optional. The relative file links work when the files remain together.

## HTML, accessibility and CSS

All pages have a doctype, English language declaration, character encoding, viewport metadata, unique title and description, one main heading, and semantic header, navigation, main and footer regions. Sections have headings; each course article is independently meaningful. Navigation uses lists and marks the current page with `aria-current="page"`.

The site includes a visible skip link, labelled form controls, grouped radio buttons and checkboxes, explanatory help text, image alternative text, a figure caption, and table headers with scope. The CSS provides basic readable presentation and focus outlines. Flexbox, Grid, media queries, frameworks and downloaded templates are deliberately absent from this A2 draft.

## Form behaviour and limitations

The form uses text, email, telephone, date and number inputs, a select menu, radio buttons, checkboxes, a textarea and a submit button. Required fields, length limits and numeric limits demonstrate HTML validation. `type="tel"` alone does not validate a telephone format. `type="email"` checks a basic format, not mailbox existence.

The form uses `method="get"` and `action="contact.html#practice-result"`. A valid practice submission reloads the contact page and includes named field values in its URL. The explanation at the destination is always present and is not a success receipt. There is no application database, email delivery, real enrolment or server-side processing. Use fictional data only: GET values can remain in browser history and hosting logs.

Client-side validation can be bypassed and does not replace server-side validation for a real service. The date control does not reject past dates in this A2 implementation. Real date rules, a secure processing endpoint and data storage are outside this draft's scope.

## Testing and evidence

See `evidence/VALIDATION.md` for actual W3C Nu HTML Checker results and source hashes. The raw checker responses are retained. See `evidence/source-checks.json` for automated local reference and structural checks. These results apply only to the checked files; revalidate after editing.

Browser interaction, keyboard use, appearance, GitHub publication and incognito access must be tested by the student using `evidence/MANUAL-TESTS.md`. Unperformed checks are explicitly marked pending. No screenshot or student testing result has been invented.

## Publication and development history

Follow `docs/BUILD-AND-SUBMIT.md`. Publish the extracted project root from your GitHub repository using `main` and `/(root)`. The private demonstration link supplied with the package is for review; it is not a replacement for the required GitHub repository and lecturer-accessible published URL.

No student Git history is supplied. If adopting this draft, record one honest import commit that identifies AI assistance, then make and commit genuine student changes as you perform them. Do not split the supplied finished files into artificial historical stages or backdate commits.

## Sources and asset attribution

- ISO229 Web Design Online Assessment Handbook & Guide (2026), pp. 5-6: A2 scope, submissions and marking; p. 13: AI and ownership requirements.
- Project Discovery and Planning Study Guide, pp. 1-5: purpose, user stories, sitemap and acceptance checks. Supplied course resource; no author/date inferred.
- Understanding HTML Foundations and Semantic Structure, pp. 2-5: semantic regions, headings, links and validation. Supplied course reading.
- Choosing the Right HTML Form Control (Week 03 quick reference), p. 1; Designing for Interaction: Web Forms and Visual Design Basics, pp. 2-5: controls, labels, GET examples and validation. Supplied course resources.
- GitHub, [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
- GitHub, [Creating a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).
- W3C, [Nu HTML Checker](https://validator.w3.org/nu/).
- MDN, [The form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form) and [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation).

Web documentation was checked on 5 September 2026 UTC. The site text and SVG diagram were drafted with ChatGPT for this educational example. No third-party photograph, logo, downloaded theme or template is used. The supplied textbook and course PDFs are not redistributed with this package.

## Next assessments

Continue the same website for A3 by adding your own responsive CSS, meaningful Flexbox and Grid layouts, and viewport evidence. For A4, consider a course filter and helpful form interaction as two purposeful JavaScript features. These are future ideas, not features already implemented.
