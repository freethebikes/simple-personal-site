# freethebikes — personal site

A personal site built with plain HTML, CSS, and JavaScript. No frameworks, no
build step. Designed for GitHub Pages.

## Structure

```
index.html          — the whole site (single page)
css/style.css       — all styling, theme variables at the top of the file
js/main.js          — particles, typewriter, scroll reveals, log + gallery rendering
js/log-data.js      — YOUR LOG ENTRIES (edit this to post)
js/gallery-data.js  — YOUR PROJECT PHOTOS (edit this to add photos)
images/projects/    — drop project photo files here
```

## Posting a log entry

Open `js/log-data.js` and add an object to the top of the array:

```js
{
  date: "2026-06-15",
  title: "Wired up the new charge controller",
  tags: ["solar", "electronics"],
  body: "Swapped the PWM controller for an MPPT unit. Seeing ~18% more harvest on the same panels."
},
```

Commit and push — done.

## Adding project photos

No database needed — photos live in the repo.

1. Copy the image into `images/projects/` (jpg/png/webp; keep them under
   ~500 KB each so the page stays fast — resize to ~1600px wide if needed).
2. Add a line to the array in `js/gallery-data.js`:

   ```js
   { project: "travco", src: "images/projects/engine-bay.jpg", caption: "318 Poly V8 with the timing cover off" },
   ```

3. Commit and push.

Photos show up as a grid in that project's card; clicking one opens a
fullscreen lightbox (arrow keys / buttons to navigate, Esc to close).
A project with no photos hides its gallery automatically. To give a future
second project its own gallery, add a `data-gallery="some-id"` block in
`index.html` and use that id in the `project` field.

## Customizing

- **Name / headline**: edit the hero section in `index.html`.
- **Colors**: edit the CSS variables at the top of `css/style.css`
  (`--accent`, `--gradient`, etc.).
- **Typewriter phrases**: edit the `phrases` array in `js/main.js`.
- **Interest cards**: edit the `<article class="card">` blocks in `index.html`;
  each card's accent color is set inline via `--card-accent`.

## Deploying to GitHub Pages

1. Create a new repository on GitHub. For your site to live at
   `https://<username>.github.io`, name the repo `<username>.github.io`;
   any other name gives you `https://<username>.github.io/<repo>`.

2. From this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:<username>/<repo>.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Source: Deploy from a branch**, choose
   `main` / `/ (root)`, save. The site goes live in a minute or two.

## Local preview

Just open `index.html` in a browser, or run a tiny server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
