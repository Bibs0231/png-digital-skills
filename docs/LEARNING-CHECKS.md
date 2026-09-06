# Understand the code

## File-reading order

Read `index.html` for the document shell and links; `courses.html` for articles and tables; `contact.html` for forms; then `css/styles.css` for basic presentation. Use your editor's search to find the exact tag or ID mentioned below.

## HTML concepts in this project

| Concept | Example | Meaning |
| --- | --- | --- |
| Document type | `<!DOCTYPE html>` | Declares modern HTML and supports standards mode. |
| Language | `<html lang="en">` | Identifies the page language for assistive tools. |
| Metadata | `<title>` and `<meta>` | Describe the document; they are separate from the visible main content. |
| Main content | `<main id="main-content">` | Holds the content unique to this page; the skip link targets its ID. |
| Heading hierarchy | `h1`, then `h2`, then `h3` | Organises topics, sections and course articles. |
| Section | `<section aria-labelledby="topics-heading">` | Groups content around a topic and links to its heading. |
| Article | `<article id="reporting">` | A course description that makes sense independently. |
| Relative link | `courses.html#reporting` | Opens the courses file and jumps to its reporting article. |
| Current page | `aria-current="page"` | Identifies which navigation link matches this page. |
| Image meaning | `alt="..."` | Provides a text alternative; the caption remains visible below the image. |
| Data table | `caption`, `th`, `scope` | Names the table and associates row/column headings with values. |

## Form concepts through a DWH lens

An HTML form is an input interface; it is not a database table. The following comparison helps explain the roles without treating browser checks as database constraints.

| HTML feature | Useful comparison | Practical meaning |
| --- | --- | --- |
| `label` | Report field caption | Human-readable question shown to the user. |
| `id` | Unique identifier inside a page | Connects the input to its label and help text. |
| `name` | Field name in a submitted record | Key used to send the value, e.g. `course=reporting`. |
| `value` | Field value | The selected or typed data; unchecked checkboxes are normally omitted. |
| `required` | A front-end completeness rule | Browser blocks an empty field; unlike a database constraint it can be bypassed. |
| `min`, `max`, `step` | A front-end range rule | Number of learners must be a whole number from 1 to 10. |
| `method="get"` | Serialised key/value parameters | Values appear in the URL query string; use fictional values here. |

### Explain this real code

```html
<label for="email">Email address (required)</label>
<input id="email" name="email" type="email"
       autocomplete="email" maxlength="120"
       aria-describedby="email-help" required>
```

`for="email"` matches `id="email"`. Clicking the label should focus the field. The `name` becomes a submitted key. The type requests an email input and a basic format check. `required` prevents an empty submission. `aria-describedby` connects the practice-address help text. The browser does not verify that the mailbox exists.

### Other controls

- A select menu limits a course choice to known options. Its empty first value ensures the user must choose.
- Radio buttons share one name, so only one learning mode can be chosen.
- Checkboxes permit multiple optional topics. Several selected topics can produce repeated `topics` keys in the URL.
- `fieldset` and `legend` describe related controls together.
- `textarea` supports a longer learning goal. The provided limits apply to text length, not word count.
- A date input provides date entry but, without extra limits, does not enforce a future start date.
- A telephone input supports telephone entry; the type alone does not enforce a PNG number format.

## Small edits to perform yourself

1. Rewrite the Home introduction for one audience you understand. Explain why that audience matters.
2. Rewrite one course article. Keep its `h3` under the existing `h2` and preserve useful links.
3. Add or revise a course option in the form, keeping it consistent with the Courses page.
4. Change a numeric rule only if it fits your scenario; update the help text and test both sides of the limit.
5. Explain and customise one CSS rule without adding A3 layout features.
6. Save, revalidate and commit actual completed changes. Record what you learned.

## Explain-back questions and model answers

1. **Why three pages?** The brief requires at least three connected HTML pages, and these separate introduction, comparison and enquiry tasks.
2. **Why article rather than a generic div for a course?** Each course description is a self-contained piece of content; article communicates that meaning.
3. **Why not use a table for the page layout?** This table compares data. Page arrangement belongs to CSS.
4. **What breaks if the label's for value differs from the input ID?** The explicit association is lost; label clicking and accessible naming may fail.
5. **How are id and name different?** ID identifies an element within the page; name is the key used in form submission.
6. **Why do the learning-mode radios share a name?** They represent mutually exclusive choices in one group.
7. **Why no actual email after submit?** HTML defines an interface and submission request; no email-processing service is configured.
8. **Does valid HTML prove the site is usable?** No. Browser, keyboard, task and publication checks are still needed.
9. **Why a relative stylesheet path?** `css/styles.css` resolves beneath the same project folder, so the site can work locally and under a GitHub project URL.
10. **Why is a private demonstration link insufficient?** A2 requires GitHub source and progressive history, plus a published site the lecturer can access.
11. **What is left for A3?** Organised responsive CSS with meaningful Flexbox, Grid and viewport adaptation.
12. **What should the AI declaration say?** It should accurately disclose the generated draft, actual assistance and your own real changes and tests.

Try answering without reading, then locate the relevant code and demonstrate a small change.
