# Irina Abasheva — exact original visual design, separate pages

This is a structural split of the attached single-file website, not a redesign.

- `index.html` redirects to `/ru/`
- `ru/`, `en/`, `pt/`: home, services, articles and contact pages
- `<language>/articles/<ArticleSlug>/index.html`: an individual HTML article
- `assets/irina-abasheva.jpg`: original user photograph
- `js/main.js`: minimal menu and email-form behavior

**Design fidelity:** The original Tailwind CDN configuration, Google fonts, Font Awesome, embedded CSS, class lists, layouts, service cards, article cards, colors and spacing are preserved from the attached HTML. Only SPA navigation became ordinary links.

**Contact form:** Opens the visitor's email application with a prefilled message. It does not send mail on its own.

**To add an article:** copy an existing article folder, edit its `index.html` (preserving the surrounding layout), and add a linked article card to `ru/articles/index.html`. Repeat for EN/PT when translated.

Upload the **contents** of this archive to the root of the `ireiny/site` repository.
