# itwithabbas.com

Personal site and blog built with [Astro](https://astro.build).

## Write a post

Add a Markdown file to `src/content/blog/` with this header:

```
---
title: "Your title"
description: "One sentence summary"
pubDate: 2026-10-20
category: fix-it   # fix-it | stay-safe | grow-your-career
---
```

Set `draft: true` to keep a post unpublished.

## Edit your details

`src/config.ts` holds your name, email, LinkedIn and categories.

## Run locally

```
npm install
npm run dev
```

## Deploy (Cloudflare Pages)

Framework preset: Astro. Build command: `npm run build`. Output directory: `dist`.
