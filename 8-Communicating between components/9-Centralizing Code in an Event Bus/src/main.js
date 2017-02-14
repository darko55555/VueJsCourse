import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  //data : {
      //Data would be global in this instance
  //} ,
  methods : {
    changeAge (age) {
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})


