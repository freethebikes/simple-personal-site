# freethebikes — personal site

A personal site built with plain HTML, CSS, and JavaScript. No frameworks, no
build step. Designed for GitHub Pages.

## Structure

```
index.html        — the whole site (single page)
css/style.css     — all styling, theme variables at the top of the file
js/main.js        — particles, typewriter, scroll reveals, log rendering
js/log-data.js    — YOUR LOG ENTRIES (edit this to post)
images/           — drop any images here
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
