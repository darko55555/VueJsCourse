import Vue from 'vue'
import App from './App.vue'

//Global
Vue.filter('toLowercase', function(value){
  return value.toLowerCase();
});

Vue.mixin({
   created() {
    console.log('Global mixin! - Created');
   }
});

new Vue({
  el: '#app', //FIRST CALL
  render: h => h(App)
})
