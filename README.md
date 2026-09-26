# PNG Digital Skills Hub - ISO229 Assessment 3

PNG Digital Skills Hub is a three-page HTML5 and CSS3 student website
developed for ISO229 Web Design.

Assessment 3 extends the website completed for Assessment 2 by adding
responsive CSS3 styling, Flexbox, CSS Grid, CSS custom properties,
media queries, responsive form layouts and improved visual consistency.

The website demonstrates semantic HTML5 structure, accessible navigation,
responsive layouts, course comparison content, responsive cards,
a substantial HTML5 enquiry form and browser-based validation.

The project represents a fictional educational service for beginners in
Papua New Guinea who want to build practical digital skills for study,
office work and small-business activities.

This project began from an AI-assisted learning draft. I reviewed,
customised, implemented, tested and documented the Assessment 3
responsive improvements before submission. AI assistance is disclosed
in `AI-USE-DECLARATION.md`.

## Student and submission details

- Student name: **Bill Junior Lagani**
- Student ID: **25576687**
- GitHub username: **Bibs0231**
- GitHub repository URL: `https://github.com/Bibs0231/png-digital-skills`
- Published GitHub Pages URL: [Live GitHub Pages website](https://bibs0231.github.io/png-digital-skills/)
- Assessment: **ISO229 Web Design - Assessment 3**
- Due date: **25 September 2026, 11:59 pm**

## Purpose and audience

The proposed service helps adult beginners in Papua New Guinea compare
introductory digital-skills courses and practise a course enquiry.

The target audience includes:

- students;
- office staff; and
- small-business owners.

The main user tasks are to:

1. understand the learning service;
2. compare course topics and expected practice outputs;
3. review a practical learning path; and
4. complete a clearly labelled practice enquiry form using fictional data.

## Assessment 3 improvements

Assessment 3 extends the Assessment 2 website with the following CSS3
and responsive-design improvements:

- reusable CSS custom properties for colours, spacing and sizing;
- mobile-first responsive design;
- Flexbox navigation and header alignment;
- CSS Grid for the learning-path cards;
- CSS Grid for responsive course cards;
- one-column, two-column and three-column responsive layouts;
- responsive form layout;
- flexible images using `max-width: 100%`;
- responsive table handling;
- consistent buttons, borders, cards and panels;
- readable typography and spacing;
- visible keyboard focus states; and
- media queries for tablet and desktop layouts.

No Bootstrap, Tailwind, downloaded themes or page builders are used.

## Responsive design

The website was tested at three representative viewport widths:

| Viewport |  Width | Main behaviour                                                     |
| -------- | -----: | ------------------------------------------------------------------ |
| Mobile   |  375px | Single-column content, stacked course cards and single-column form |
| Tablet   |  768px | Two-column course cards and two-column basic form fields           |
| Desktop  | 1440px | Three-column course cards and expanded desktop layout              |

The design follows a mobile-first approach. The small-screen layout is
the default, while media queries progressively enhance the layout as
more screen space becomes available.

## Pages and files

| File                              | Purpose                                                                |
| --------------------------------- | ---------------------------------------------------------------------- |
| `index.html`                      | Home page, audience information and responsive learning path           |
| `courses.html`                    | Responsive course cards and course comparison table                    |
| `contact.html`                    | Contact context and responsive practice enquiry form                   |
| `css/styles.css`                  | Shared CSS3 design, Flexbox, Grid, media queries and responsive styles |
| `images/learning-path.svg`        | Original text-based learning-path diagram with alternative text        |
| `AI-USE-DECLARATION.md`           | Record of AI assistance and student implementation                     |
| `evidence/A3-RESPONSIVE-TESTS.md` | Assessment 3 responsive, accessibility and form testing                |
| `evidence/`                       | Validation results, screenshots and testing evidence                   |

## HTML, CSS and accessibility

The website uses semantic HTML5 elements including:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `figure`
- `table`
- `form`
- `fieldset`
- `footer`

Accessibility features include:

- skip-to-main-content link;
- logical heading structure;
- meaningful link text;
- image alternative text;
- labelled form controls;
- fieldsets and legends;
- keyboard-accessible navigation and form controls;
- visible focus outlines;
- readable colour contrast; and
- HTML5 form validation attributes.

## Flexbox implementation

Flexbox is used for the main navigation and larger-screen header
alignment.

On smaller screens, the site name and navigation remain naturally
stacked. At larger widths, Flexbox positions the site identity and
navigation side by side.

## CSS Grid implementation

CSS Grid is used meaningfully in multiple areas.

### Learning path

The learning steps display as a single column on small screens and
expand into multiple columns when sufficient screen space is available.

### Course cards

The course cards adapt as follows:

- mobile: 1 column;
- tablet: 2 columns;
- desktop: 3 columns.

### Enquiry form

The form uses a single-column layout on mobile and two columns for
suitable fields on tablet and desktop. Larger controls such as radio
groups, checkbox groups and the message field span the full form width.

## Testing completed

### Responsive testing

The website was tested at:

- 375px mobile;
- 768px tablet; and
- 1440px desktop.

Confirmed:

- no page-level horizontal scrolling;
- navigation remains usable;
- text remains readable;
- course cards adapt correctly;
- form layout adapts correctly;
- images remain within their containers; and
- the course comparison table remains usable.

### Keyboard accessibility testing

The website was tested using the Tab key without a mouse.

Confirmed:

- navigation links are reachable;
- form fields follow a logical focus order;
- radio buttons and checkboxes are keyboard accessible;
- the textarea and acknowledgement checkbox are reachable;
- the submit button is reachable; and
- visible focus styling is displayed.

### Form validation testing

The enquiry form was tested using browser-based HTML validation.

Confirmed:

- required fields prevent empty submission;
- invalid email input is rejected;
- learner numbers are restricted to the defined range;
- message minimum length is enforced;
- acknowledgement is required; and
- valid practice submissions proceed as expected.

### Browser testing

The website was tested using:

- Google Chrome
- Microsoft Edge

## Evidence

Assessment 3 evidence is stored in the `evidence` folder and includes:

- mobile responsive screenshot;
- tablet responsive screenshot;
- desktop responsive screenshot;
- HTML validation evidence;
- CSS validation evidence; and
- `A3-RESPONSIVE-TESTS.md`.

## Publication

The project is published using GitHub Pages.

Repository:

`https://github.com/Bibs0231/png-digital-skills`

Live website:

`https://bibs0231.github.io/png-digital-skills/`

The published website was checked in a private/incognito browser window
to confirm public access and working navigation.

## AI use

Generative AI was used as a learning and development assistant during
Assessment 3.

AI assistance included guidance on:

- CSS custom properties;
- Flexbox navigation;
- CSS Grid layouts;
- responsive breakpoints;
- responsive form layout;
- accessibility testing;
- responsive testing strategy; and
- documentation structure.

I personally reviewed, implemented, tested, modified and committed the
submitted website changes. Full details are recorded in
`AI-USE-DECLARATION.md`.
