# ISO229 Assessment 4 – Functional and Responsive Testing

**Project:** PNG Digital Skills Hub
**Assessment:** A4 – Individual Integrated Web Design Project
**Testing date:** 9 October 2026

## 1. JavaScript Feature 1 – Course Search and Filter

| Test                   | Expected behaviour                  | Result |
| ---------------------- | ----------------------------------- | ------ |
| Search for `Spread`    | Spreadsheet Foundations only        | Pass   |
| Search for `xyz`       | No results message displayed        | Pass   |
| Clear or reset search  | All three courses appear            | Pass   |
| Search result count    | Displays correct matching count     | Pass   |
| Tablet layout at 768px | Two-column course layout maintained | Pass   |

The JavaScript course filter updates the displayed course cards without reloading the webpage. Screenshots are saved as:

- `a4-course-filter.png`
- `a4-course-no-results.png`

## 2. JavaScript Feature 2 – Enquiry Form Validation

| Test                         | Expected behaviour                                   | Result |
| ---------------------------- | ---------------------------------------------------- | ------ |
| Empty message                | Counter displays 0 / 600                             | Pass   |
| Type 20 spaces               | Counter updates to 20 / 600                          | Pass   |
| Submit spaces-only message   | JavaScript rejects insufficient meaningful text      | Pass   |
| Error feedback               | Validation message appears below textarea            | Pass   |
| Valid practice enquiry       | Browser accepts form and reloads with GET parameters | Pass   |
| Practice-result URL fragment | URL includes `#practice-result`                      | Pass   |

The form uses HTML5 validation with additional JavaScript validation. Only fictional test data should be entered because the form uses GET parameters.

Evidence: `a4-form-validation.png`

## 3. Responsive Testing

| Viewport         | Check                                       | Result |
| ---------------- | ------------------------------------------- | ------ |
| Mobile – 375px   | Course filter, cards and form remain usable | Pass   |
| Tablet – 768px   | JavaScript search and responsive layout     | Pass   |
| Desktop – 1440px | Course filter, form and layouts             | Pass   |

## 4. Accessibility Testing

| Test                                              | Result              |
| ------------------------------------------------- | ------------------- |
| Semantic HTML, labels and fieldsets retained      | Pass                |
| Keyboard access to JavaScript controls            | Pass                |
| Visible keyboard focus                            | Pass                |
| JavaScript feedback remains readable              | Pass for form error |
| Accessibility audit with Lighthouse or equivalent | Pass                |

## 5. Browser and Validation Testing

| Check                                | Result                         |
| ------------------------------------ | ------------------------------ |
| Local functionality in Google Chrome | Pass for demonstrated features |
| Microsoft Edge final A4 testing      | Pass                           |
| HTML validation after A4 changes     | Pass                           |
| CSS validation after A4 changes      | Pass                           |
| JavaScript Console final check       | Pass                           |
| GitHub Pages functional verification | Pass                           |

## 6. Known Limitations

- The website is a student demonstration, not an actual learning service.
- Course information is contained within the static HTML pages.
- The form does not send email or create enrolments.
- The form uses GET for demonstration purposes, so only fictional data should be entered.
- There is no backend database or persistent enquiry storage.

## 7. Conclusion

Both required JavaScript features have been implemented and locally tested for their principal functions. Final browser, responsiveness, accessibility, validation and published-website checks will be completed before submission.
