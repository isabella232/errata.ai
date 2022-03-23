---
layout: docs
title: Introduction
description: Get started with Bootstrap, the world's most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.
group: getting-started
aliases:
  - "/docs/4.6/getting-started/"
  - "/docs/getting-started/"
  - "/getting-started/"
toc: true
---

## Quick start

{{< youtube w7Ft2ymGmfc >}}

To switch directories, type `cd` followed by the name of the directory. To edit settings, press <kbd>Cmd+Shift+P</kbd>.

```yaml
extends: conditional
message: "'%s' has no definition"
level: error
scope: text
ignorecase: false
# Ensures that the existence of 'first' implies the existence of 'second'.
first: '\b([A-Z]{3,5})\b'
second: '(?:\b[A-Z][a-z]+ )+\(([A-Z]{3,5})\)'
# ... with the exception of these:
exceptions:
  - ABC
  - ADD
```

<div class="alert-box danger"><blockquote><span class="bold-30s6yT">In order to make commands work within a guild, the guild must authorize your application with the <code>applications.commands</code> scope. The <code>bot</code> scope is not enough.</span></blockquote></div>

<div class="alert-box warn"><blockquote><span class="bold-30s6yT">In order to make commands work within a guild, the guild must authorize your application with the <code>applications.commands</code> scope. The <code>bot</code> scope is not enough.</span></blockquote></div>

<div class="alert-box info"><blockquote><span class="bold-30s6yT">In order to make commands work within a guild, the guild must authorize your application with the <code>applications.commands</code> scope. The <code>bot</code> scope is not enough.</span></blockquote></div>

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

Looking to quickly add Bootstrap to your project? Use jsDelivr, a free open source CDN. Using a package manager or need to download the source files? [Head to the downloads page]().

### CSS

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

### JS

Many of our components require the use of JavaScript to function. Specifically, they require [jQuery](https://jquery.com/), [Popper](https://popper.js.org/), and our own JavaScript plugins. We use [jQuery's slim build](https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/), but the full version is also supported.

Place **one of the following `<script>`s** near the end of your pages, right before the closing `</body>` tag, to enable them. jQuery must come first, then Popper, and then our JavaScript plugins.

#### Bundle

Include every Bootstrap JavaScript plugin with one of our two bundles. Both `bootstrap.bundle.js` and `bootstrap.bundle.min.js` include [Popper](https://popper.js.org/) for our tooltips and popovers, but not [jQuery](https://jquery.com/). Include jQuery first, then a Bootstrap JavaScript bundle. For more information about what's included in Bootstrap, please see our [contents]() section.

#### Separate

If you decide to go with the separate scripts solution, Popper must come first (if you're using tooltips or popovers), and then our JavaScript plugins.

#### Components

Curious which components explicitly require jQuery, our JavaScript, and Popper? Click the show components link below. If you're unsure about the page structure, keep reading for an example page template.

## Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

That's all you need for overall page requirements. Visit the [Layout docs]() or [our official examples]() to start laying out your site's content and components.

## Important globals

Bootstrap employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### HTML5 doctype

Bootstrap requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

### Responsive meta tag

Bootstrap is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

You can see an example of this in action in the [starter template](#starter-template).

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

With the above snippet, nested elements—including generated content via `::before` and `::after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Reboot

For improved cross-browser rendering, we use [Reboot]() to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

## Community

Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.

- Read and subscribe to [The Official Bootstrap Blog]().
- Join [the official Slack room]().
- Chat with fellow Bootstrappers in IRC. On the `irc.libera.chat` server, in the `#bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`bootstrap-4`](https://stackoverflow.com/questions/tagged/bootstrap-4)).
- Developers should use the keyword `bootstrap` on packages which modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/search?q=keywords:bootstrap) or similar delivery mechanisms for maximum discoverability.

You can also follow [@getbootstrap on Twitter](https://twitter.com/) for the latest gossip and awesome music videos.

## CSPs and embedded SVGs

Several Bootstrap components include embedded SVGs in our CSS to style components consistently and easily across browsers and devices. **For organizations with more strict <abbr title="Content Security Policy">CSP</abbr> configurations**, we've documented all instances of our embedded SVGs (all of which are applied via `background-image`) so you can more thoroughly review your options.

Based on [community conversation](https://github.com/twbs/bootstrap/issues/25394), some options for addressing this in your own codebase include replacing the URLs with locally hosted assets, removing the images and using inline images (not possible in all components), and modifying your CSP. Our recommendation is to carefully review your own security policies and decide on a best path forward, if necessary.
