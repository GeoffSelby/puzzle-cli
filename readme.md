# Puzzle CLI

A powerful command line tool to quickly scaffold your [Jigsaw](https://jigsaw.tighten.co) project

## Installation

### npm

```bash
npm install -g puzzle-cli
```

## Usage

To start with a mostly blank slate, use the [plain preset](https://github.com/GeoffSelby/puzzle-plain-preset):

```bash
puzzle new my-site --preset plain
```

> NOTE: The plain preset is the default. This means you can leave the `--preset` flag out if you prefer.

To use the [blog preset](https://github.com/GeoffSelby/puzzle-blog-preset):

```bash
puzzle new my-blog --preset blog
```

To use the [prelaunch preset](https://github.com/GeoffSelby/puzzle-prelaunch-preset):

```bash
puzzle new my-product --preset prelaunch
```

The `new` command will install [Jigsaw](https://jigsaw.tighten.co) with the preset given.

## Current presets include:

### Plain

A mostly blank slate for [Jigsaw](https://jigsaw.tighten.co) sites powered by [Tailwind CSS](https://tailwindcss.com).

### Blog

A minimal blog preset template for [Jigsaw](https://jigsaw.tighten.co) sites powered by [Tailwind CSS](https://tailwindcss.com).

### Prelaunch

A modern, minimal prelaunch preset for [Jigsaw](https://jigsaw.tighten.co) powered by [Tailwind CSS](https://tailwindcss.com).

## License

Puzzle CLI is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).