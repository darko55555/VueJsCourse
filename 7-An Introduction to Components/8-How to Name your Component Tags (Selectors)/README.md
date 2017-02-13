###Alternative folder Structures
In bigger projects an alternative woulde be:

Instead of having your components in a components/ folder (and storing other shared files in other folders - e.g. shared/), you can also group your files by feature.

This could look like this:

- main.js
- users/
- - account/
- - analytics/
- shop
- - main/
- - checkout/

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


