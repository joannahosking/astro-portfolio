---
title: Harris Group
shortname: Harris Group
description: premium brochure site
icon: web
sortOrder: 3
---

- [Visit site &rarr;](https://harrispipework.co.uk/)

Harris Pipework isn't one company but rather several distinct businesses under one group, and the site needed to communicate that "group" identity and portray them with the level of establishedness and trustworthiness they command across their industries, without feeling like a soulless holding-company page nobody actually wants to read.

![Screenshot](../../assets/projectImages/harris-pipework-hero.png)

The approach was to lean into scale visually: large-format imagery, generous negative space, and scroll-driven animation built with *GSAP* to give the site an editorial, premium feel rather than a typical trade-industry template look. I worked closely with our designer to turn her vision into an actual animation plan, working through what was technically achievable, what would hold up for SEO given how much of the page relies on scroll-triggered reveals, and where we'd need to compromise between the two. We also collaborated on the UX side of a trickier problem: how do you present "a group of companies" in a way that feels coherent rather than like five separate mini-sites bolted together.

![Scroll animation](../../assets/projectImages/harris-pipework-scroll.gif)

Large hero images and heavy animation are an easy way to tank performance if you're not careful, so I leaned on a few different fronts to keep it in check: debouncing scroll listeners where GSAP triggers didn't need to fire on every pixel of movement, serving WebP images with proper compression, and lazy loading below-the-fold imagery. Video was the bigger challenge, with several sections using large-scale background video, so alongside optimising and providing fallback imagery on the front end, I worked with the videography team directly on export settings, making sure their edits were coming through at file sizes and formats that wouldn't tank load times before they even reached the browser.