---
layout: topic

title: Installation
description: |
  Get started with Vale, a syntax-aware linter for prose built with speed and
  extensibility in mind.

group: getting-started
toc: true

js:
  - os.js
---

{{< youtube w7Ft2ymGmfc >}}

## Quick Start

In general, the recommended approach on all platforms is to use a package
manager such as Homebrew (macOS) or Chocolately (Windows):

{{< tabs install >}}

This will ensure that Vale is available on your `$PATH` and allow you to stay
up to date with new releases.

## GitHub Releases (CI/CD)

With each new version of Vale, pre-built binaries are uploaded as [GitHub
Release][2] assets. To use these, you'll need to download the archive for
your platform, extract it to a local directory, and (optionally) add the
extracted directory to your `$PATH`:

```shell
$ wget https://github.com/errata-ai/vale/releases/download/v2.15.4/vale_2.15.4_Linux_64-bit.tar.gz
$ mkdir bin && tar -xvzf vale_2.15.4_Linux_64-bit.tar.gz -C bin
$ export PATH=./bin:"$PATH"
```

This is usually the best choice for running Vale on a CI/CD server (Travis CI,
AppVeyor, CircleCI, …) since it doesn't require build dependencies or a package
manager to be installed.

## Docker

Vale is available on Docker Hub at [`jdkato/vale`][1]:

```shell
$ docker pull jdkato/vale
```

Vale requires three components: a `.vale.ini` config file, a `StylesPath`
directory (specified in the config file), and a document or directory to lint.

Here's an example of calling Vale with locally-defined components (assuming
`$(pwd)/fixtures/styles/demo` contains a config file):

```shell
$ docker run --rm -v $(pwd)/styles:/styles \
             --rm -v $(pwd)/fixtures/styles/demo:/docs \
             -w /docs \
             jdkato/vale .
```

By default, the image supports HTML, Markdown, AsciiDoc, and reStructuredText
content. If you need support for DITA as well, you'll need to add the relevant
dependencies&mdash;for example,

```bash
# Choose a version to pin:
FROM jdkato/vale:v2.15.2

# Copy a local installation of the DITA Open Toolkit:
COPY bin/dita-ot-3.6 /
ENV PATH="/dita-ot-3.6/bin:$PATH"

ENTRYPOINT ["/bin/vale"]
```

[1]: https://hub.docker.com/r/jdkato/vale
[2]: https://github.com/errata-ai/vale/releases
