# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Rajni Kaur's author website (rajnikaur.com, see `CNAME`) — a static site with no build step, no package manager, and no framework. It's hand-written HTML/CSS/JS meant to be opened directly or served as static files (e.g. via GitHub Pages).

## Development

There is no build, lint, or test tooling in this repo. To preview changes, just open the HTML files directly in a browser, or serve the directory locally, e.g.:

```
python3 -m http.server 8000
```

## Architecture

- Each top-level page is a standalone `.html` file (`index.html`, `about.html`, `books.html`, `essays.html`, `stories.html`, `contact.html`) — there is no templating engine, so the `<header class="site-header">` nav and `<footer class="site-footer">` markup is duplicated across every page. When changing the nav or footer, update it in **all** HTML files, keeping the `class="active"` marker on the link matching the current page.
- All styling lives in the single `css/style.css`, using CSS custom properties defined in `:root` (`--bg`, `--ink`, `--accent`, `--accent-light`, `--muted`, `--border`, `--max-width`) for the color palette and layout width. Reuse these variables rather than hardcoding colors.
- `js/script.js` is small, framework-free vanilla JS handling two behaviors used across pages:
  - The book cover carousel (`.book-carousel` / `.carousel-img` / `.carousel-prev` / `.carousel-next`), which toggles an `active` class on images.
  - The "Buy Now" dropdown (`.dropdown` / `.dropdown-toggle` / `.dropdown-menu`), toggled via a document-level click listener with click-outside-to-close.
- Layout is built from a reusable `.split` section pattern (image on one side, text on the other), with `.split.reverse` flipping the order and `.split.align-top` adjusting vertical alignment — used on the home, about, and books pages.
- `.btn` is the shared CTA button style (180x50px, flex-centered text), with `.btn.secondary` and `.btn-sm` variants.
- Images live in `images/`; the book cover carousel currently uses `book-front.png` / `book-back.png`, and `author.jpg` is used on the home/about pages.
