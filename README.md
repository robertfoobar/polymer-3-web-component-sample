# Sample Polymer 3 Web Component
Code in here is written in ES6 based on the [Polymer](https://polymer-project.org) framework.

## Prerequisites

* Make sure you have Node >=v8.9.1 with NPM >=v5.5.1 installed
* Make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) >=1.9.1 installed.

## Serving the dev state
Then run `polymer serve` to serve your application locally.
```
$ polymer serve
```

## Building the app for production
```
$ npm run compile:prod
```
This will create builds of your application in the `build/` directory, optimized to be served in production.

## Serving the prod build locally

You can serve the compiled output like so:

```
$ npm run compile:prod
$ npm run serve:prod
```
This will startup a local http server hosting from the build output folders. Usually at https://localhost:8443/.

## How does the web component bootstrapping work
When you open index.html it will load
* webcomponents-loader, which takes care of polyfilling your browser
* regenerator runtime,
* babelhelpers,
* and some polyfill code that is taken from polymer serve output.

Then it will load a custom loader that I've written to determine whether to serve the es5 bundled version or the
es6 version of the web component.
