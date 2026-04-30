# Mobile QA Notes (<430px)

Tested on `http://localhost:5173/` with viewport `390x844`.

## Issues observed

- [ ] **Horizontal overflow in "The stack" chips row**
  - The chips row (e.g. `PostgreSQL`, `MongoDB`, `Redis`) overflows the viewport and clips content on the right side.
  - This section appears to remain in a horizontal inline layout when it should wrap cleanly on narrow screens.

- [ ] **Section navigation cards are too compressed in multi-column layout**
  - The `01–05` section nav remains in a dense multi-column grid on mobile.
  - Card labels break awkwardly (example: `Selected stories`, `Get in touch`, and subtitles wrapping to many short lines), making the row feel cramped and hard to scan.

- [ ] **Header role/location line loses intended inline grouping**
  - `Senior Software Engineer · Indianapolis, IN` is visually split across lines at this width.
  - If this line is intended to stay inline as one compact meta row, it currently does not.

- [ ] **Footer meta line wraps awkwardly**
  - `© 2026 Damanveer Singh · Indianapolis, IN · +1 (317) 997-5730` wraps into broken fragments at the bottom.
  - The dot separators and text chunks break in a way that harms readability.

- [ ] **Desktop interaction cue shown on mobile**
  - `Hover any card` appears in the stories section on a touch viewport.
  - The copy is desktop-oriented and does not match mobile interaction patterns.

## Suggested next pass

- Convert overflow-prone inline rows to wrap-friendly layouts (`flex-wrap`/column stacking at mobile breakpoints).
- Collapse section nav into one-column or two-column cards below `430px`.
- Replace `hover` instruction text with touch-friendly wording for mobile.
- Adjust typography/spacing for top and footer metadata lines so they remain readable when wrapped.
