# HTML validation evidence

These are actual assistant-run checks of the initial AI-assisted draft.

Checker: https://validator.w3.org/nu/
Method: submitted each final HTML file as UTF-8 text/html to the Nu JSON endpoint.
Checker version: 26.8.31

| File         | UTC check time                   | Errors | Warnings |
| ------------ | -------------------------------- | ------ | -------- |
| contact.html | 2026-09-05T14:00:16.024691+00:00 | 0      | 0        |
| courses.html | 2026-09-05T14:00:16.059631+00:00 | 0      | 0        |
| index.html   | 2026-09-05T14:00:16.051384+00:00 | 0      | 0        |

All three responses contained an empty messages array. No unavoidable HTML warnings were reported. Raw service responses are in the matching `*-nu-result.json` files. `validation-summary.json` records file hashes and timestamps.

## File fingerprints

A changed file needs a new validation run. The SHA-256 hashes below identify the exact checked bytes.

- contact.html: `a8b84bd498b7f9162e4efdc6724619f563c069f12f852c55418f47049135d2c2`
- courses.html: `4e61c978288a4c8d16580a8223389f82fead0a0f3e4b0004332e0964667fda95`
- index.html: `77ff2f1050a9a2be67af56a668e1e87f560178edf3332211754af13b030c2d17`

## Additional local checks

Automated local checks: 91 passed, 0 failed. See `source-checks.json` for individual results. These cover file/fragment references, labels, IDs, core structure and the A2 styling boundary.

# Final HTML validation evidence

Final validation checks done for index.html, courses.html & contact.html at 06-Sep-2026 @16:00pm & 17:55pm and screen shots uploaded to /evidence folder
