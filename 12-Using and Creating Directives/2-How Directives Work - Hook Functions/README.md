# vue-cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## HOOKS

 - bind(el, binding, vnode) -> Once Directive is Attached
 - inserted(el, binding, vnode) -> Inserted in Parent Node
 - update(el, binding, vnode, oldVnode) -> Once component is Updated (without children)
 - componentUpdated(el, binding vnode, oldVnode) -> Once component is updated (with children)
 - unbind(el, binding, vnode) -> Once directive is removed
