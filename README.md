# Minimal Service Worker ES Module Repro

There's a [small issue in the vite PWA plugin](https://github.com/vite-pwa/vite-plugin-pwa/issues/358) which can lead to the service worker being bundled as an ES module, which browsers will fail to register correctly.

## Setup

The basic idea is if you include a `node_module` which is a CommonJS module inside of your service worker code while the plugin is using the `injectManifest` strategy, it will lead to the service worker looking something like this:
```js
var t = (l, o) => () => (o || l((o = { exports: {} }).exports, o), o.exports);
var _ = t((r, e) => {
  // Your compiled code here
});
export default _();
```

In this repo, `some-module` is taking the place of any CommonJS library.  Using any library like this causes the built asset to have this issue.
