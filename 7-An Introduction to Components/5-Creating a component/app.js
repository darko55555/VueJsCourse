//Var component to register locally
var cmp =
  {
    data : function() {
     return { status : 'Critical'};
    },
    template : '<p>(LOCAL)  Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
    methods:  {
      changeStatus : function() {
        this.status = 'Normal';
      }
    }
  };
//Global component
  Vue.component('my-cmp-global',
  {
    data : function() {
     return { status : 'Critical'};
    },
    template : '<p>(GLOBAL) Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
    methods:  {
      changeStatus : function() {
        this.status = 'Normal';
      }
    }
  });

new Vue({
  el: '#app',
  components : {
    'my-cmp' : cmp //local component
  }
});

new Vue({
  el: '#app2'
});
