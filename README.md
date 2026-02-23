# 11ty-after-dark

Eleventy 3.1.2 port of the original Zola `after-dark` theme.

## Credit

This project is based on the original work by the `after-dark` creators and contributors:
- Original theme: https://github.com/getzola/after-dark
- Original framework: Zola
- Original license: MIT

Contributor attribution is also preserved in `src/humans.txt.njk`.

## Stack

- Eleventy `3.1.2`
- ESM config
- Nunjucks templates
- Luxon date handling
- Sass build for `src/assets/static/site.css`

## Local Development

```bash
npm install
npm run start
```

## Build

```bash
npm run build
```

## Structure

- `src/`: Eleventy source root
- `src/_includes`: Nunjucks layouts/partials
- `src/_data`: global data
- `src/posts`: blog content
- `src/assets/sass`: SCSS source
- `src/assets/static`: passthrough static assets

## Included Site Metadata Endpoints

- `/humans.txt`
- `/robots.txt`
- `/sitemap.xml`
- `/sitemap.txt`
- `/feed/feed.xml`
- `/feed/feed.rss`

## Notes

- Header includes feed links, favicon, and generator metadata.
- Footer includes `Built with 11ty`.
