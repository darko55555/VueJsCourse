import Vue from 'vue'
import VueResource from  'vue-resource';
import App from './App.vue'

//npm install --save vue-resource
Vue.use(VueResource);
Vue.http.options.root = 'https://famous-mission-120721.firebaseio.com/data.json';
//Vue.http.options.headers =
new Vue({
  el: '#app',
  render: h => h(App)
})
