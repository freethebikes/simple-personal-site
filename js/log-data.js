/* ============================================================
   LOG ENTRIES — your simple blog.
   To post: add a new object to the TOP of this array, commit,
   and push. That's it.

   Fields:
     date  — "YYYY-MM-DD"
     title — short headline
     tags  — array of short labels (optional, can be [])
     body  — one or a few sentences (plain text)
   ============================================================ */

const LOG_ENTRIES = [
  {
    date: "2026-06-11",
    title: "Site is live",
    tags: ["meta", "web"],
    body: "Launched this site — plain HTML, CSS, and JavaScript, hosted on GitHub Pages. No frameworks, no build step. New log entries are just objects added to a JS file."
  },
  {
    date: "2026-06-01",
    title: "Example: replace me",
    tags: ["example"],
    body: "This is a sample entry. Open js/log-data.js, add a new object above this one with your own date, title, tags, and body, then delete the examples."
  }
];
