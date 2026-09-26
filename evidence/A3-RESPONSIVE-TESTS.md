# Assessment 3 - Responsive and Accessibility Testing

## Project

PNG Digital Skills Hub

## Responsive Viewport Testing

| Test Area                              | Mobile - 375px | Tablet - 768px | Desktop - 1440px | Result |
| -------------------------------------- | -------------- | -------------- | ---------------- | ------ |
| Navigation remains usable              | Yes            | Yes            | Yes              | Pass   |
| Content remains readable               | Yes            | Yes            | Yes              | Pass   |
| No page-level horizontal scrolling     | Yes            | Yes            | Yes              | Pass   |
| Learning-path Grid adapts correctly    | 1 column       | 3 columns      | 3 columns        | Pass   |
| Course-card Grid adapts correctly      | 1 column       | 2 columns      | 3 columns        | Pass   |
| Course comparison table remains usable | Yes            | Yes            | Yes              | Pass   |
| Form layout adapts correctly           | 1 column       | 2 columns      | 2 columns        | Pass   |
| Images remain within their containers  | Yes            | Yes            | Yes              | Pass   |

## Keyboard Accessibility Test

The website was tested using the Tab key without using the mouse.

Confirmed:

- Navigation links can be reached by keyboard.
- All form controls can be reached in a logical order.
- Radio buttons and checkboxes are keyboard accessible.
- The textarea and acknowledgement checkbox are reachable.
- The submit button is reachable.
- Visible focus styling appears while navigating with the keyboard.

**Result: Pass**

## Form Validation Testing

The practice enquiry form was tested using browser-based HTML validation.

Confirmed:

- Required fields prevent empty submission.
- Invalid email format is rejected.
- Number of learners is restricted to the permitted range.
- The message field enforces the required minimum length.
- The practice acknowledgement must be selected before submission.
- A valid practice submission proceeds as expected.

**Result: Pass**

## Browsers

Tested successfully in:

- Google Chrome
- Microsoft Edge

Navigation, page layout, form controls and responsive behaviour
were confirmed in both browsers.

## Notes

The website uses a mobile-first responsive approach. Layout changes are introduced through CSS media queries as additional screen space becomes available.
