Vue.component('my-cmp',
  {
    //It  must be a function
    data : function() {
     return {status : 'Critical'}
    },
    template : '<p>Server Status: {{ status }} </p>'
  });

new Vue({
  el: '#app'
});
