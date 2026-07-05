# Editing Guide — Shubham Kumar Resume Site

This is the real, deployable version of the site designed in `project/Shubham Kumar - Site.dc.html`
(see `README.md` and `chats/chat1.md` for the design history). It's plain HTML/CSS/JS —
no build step, no framework. Open `index.html` in a browser or push the repo straight
to GitHub Pages.

## File layout

```
index.html              — all page markup, in section order (nav, hero, about, experience,
                           research, education, skills, contact, footer)
assets/css/styles.css   — all styling, incl. the dark/light theme variables at the top
assets/js/main.js       — theme toggle, scroll reveal, scroll progress bar, nav
                           scroll-spy, back-to-top, and the mailto contact form
assets/resume/          — the downloadable resume PDF
assets/img/             — put your photo here (see below)
```

## Editing content

Everything is static markup in `index.html` — find the text and edit it in place.
Sections are marked with banner comments like `<!-- ===================== EXPERIENCE ===================== -->`.

The four project cards (Research & Projects) and four skills columns are each written out
as repeated blocks of markup rather than a data loop — copy/paste/edit a `.project-card` or
`.skill-card` block to add or remove one.

## Adding your photo

No photo has been added yet — the hero shows a placeholder box.

1. Drop your photo into `assets/img/` (e.g. `assets/img/photo.jpg`).
2. In `index.html`, find the `.photo-slot` div in the hero (inside `<div class="hero-photo-col">`)
   and replace it with:
   ```html
   <div class="photo-slot"><img src="assets/img/photo.jpg" alt="Shubham Kumar"></div>
   ```
   (Delete the placeholder ring/icon markup inside — the `<img>` replaces it entirely.)
3. `.photo-slot` is already sized and styled (272×336px, 6px radius, `object-fit: cover`),
   so a portrait-oriented photo will crop to fit automatically.

## Updating the resume PDF

The download buttons (nav + hero) point to `assets/resume/Shubham_Kumar_Resume.pdf`.

To swap in a new resume:
1. Replace the file at `assets/resume/Shubham_Kumar_Resume.pdf` with your new PDF (keep the
   same filename, or update both `href="assets/resume/…"` links in `index.html` if you rename it).
2. Optional: change the `download="Shubham_Kumar_Resume.pdf"` attribute on those links to
   control the filename the browser saves it as.

Keep a general (non-bank-specific) version for the public site.

## Theme & tweaks

- The theme toggle (top-right) switches dark/light; the choice is remembered per visitor
  via `localStorage`.
- To hide the photo column or the green "open to roles" badge, delete the corresponding
  block in the hero markup (`.hero-photo-col` or `.badge`).

## Contact form

The site is static, so the form composes an email (opens the visitor's mail app addressed
to you) rather than posting to a server — see `initContactForm()` in `assets/js/main.js`.
For a real inbox-based form, point the `<form>` at a service like Formspree instead.

## Deploying to GitHub Pages

1. Create a repo (e.g. `Shubhamx07x.github.io` for a root user-site URL, or any name for
   a project site).
2. Push this repo's contents to it.
3. In the repo's Settings → Pages, set the source to deploy from the `main` branch (root).
4. The site goes live at `https://<username>.github.io/` (or `.../<repo-name>/` for a
   project site) within a minute or two.
