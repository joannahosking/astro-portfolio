---
title: Respecting user preferences with CSS
pubDate: 2024-04-15
---

I love the idea of making the web feel good for everyone. The last half-decade or so, we've gotten some new options for respecting users in CSS that have been super helpful in making our websites more welcoming and accessible. Despite this, I can get overexcited to make something live because it's looking nice on my screen. I thought I'd be nice to have a thoughtful refresher on the media features available.

## prefers-color-scheme

I'll be honest; I use light mode during the day. I like the look of a clean background. Dark/light toggles have been popular recently, and there are some [really cute implementations](https://www.figma.com/community/file/1336384009224901312). That said, just respecting the user's preference seems like an easier implementation.

I've found combining CSS variables with media queries to be the simplest implementation:

```css
:root {
  --color-background: #fff;
  --color-text: #000;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #000;
    --color-text: #fff;
  }
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
}
```

Obviously, you can place the media query on each element you want to adjust or place one and throw a load of code in it. I've found setting myself up early with some alternate CSS variables to be the most effective method though.

## prefers-reduced-motion

This one requires a quick interlude. While _prefers-color-scheme_ is easy to adjust in the Chrome Devtools, _prefers-reduced-motion_ and _prefers-contrast_ requires opening a new tray. _Ctrl/Cmd+Shift+P_ opens a prompt, then search for Show Rendering. You'll get a new tab full of accessiblity options to emulate.

Respecting users' preference for less motion is fairly straight forward:

```css
.el {
  transition: transform 0.25s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .el {
    transition: none;
  }
}
```

It's worth also considering if the states you're transitioning between are causing any sort of large shift that may be jarring.

Tatiana Mac had an [awesome article](https://www.tatianamac.com/posts/prefers-reduced-motion/) on taking a no-motion-first approach, which is worth a read. While I personally haven't structured my CSS that way, I tend to take a similar approach when using a JavaScript library like GSAP or Framer Motion to animate elements, to both respect user preferences and relieve my paranoia that important people are looking at my website with JS disabled.

```javascript
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.to(".el", {
    x: 100,
    duration: 0.25
  });
}
```

## prefers-contrast and forced-colors

Contrast preferences and forced colors have always been a bit beyond me. It seems like Windows and Mac handle them very differently. While digging for some clarity, I came across [Kilian Valkhof's article](https://kilianvalkhof.com/2023/css-html/i-no-longer-understand-prefers-contrast/) which raised more questions I hadn't considered.

All of that in mind, I've decided this one is [best explored visually](https://www.youtube.com/watch?v=yYGLEy7CiT0) to get a grip on it. I tend to avoid removing outlines, test my CSS with forced colors emulated, and make adjustments primarily using the forced-colors media feature if needed. If I'm being completely ignorant about these accessibility features, I'd love to [talk it out](mailto:hello@joannahosking.com).
