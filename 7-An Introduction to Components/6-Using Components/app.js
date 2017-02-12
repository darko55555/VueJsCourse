//Share data: it will change  all components with this variable
var data  = { status : 'Critical'};

Vue.component('my-cmp-same-data',
  {
    //It  must be a function
    data : function() {
     return data;
    },
    template : '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
    methods:  {
      changeStatus : function() {
        this.status = 'Normal';
      }
    }
  });

//Different data
Vue.component('my-cmp',
  {
    //It  must be a function
    data : function() {
     return { status : 'Critical'};
    },
    template : '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
    methods:  {
      changeStatus : function() {
        this.status = 'Normal';
      }
    }
  });

new Vue({
  el: '#app'
});
