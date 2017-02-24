import Vue from 'vue'
import VueResource from  'vue-resource';
import App from './App.vue'

//npm install --save vue-resource
Vue.use(VueResource);
Vue.http.options.root = 'https://changeurl/data.json';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST'){
    request.method = 'PUT';
  }
  next();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
