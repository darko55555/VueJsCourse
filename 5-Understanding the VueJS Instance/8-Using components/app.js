var data = {
   title: 'The VueJS Instance',
    showParagraph: false
}


var vm1 = new Vue({
  el: '#app',
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      //View ref
      console.log(this.$refs);
      //Access to ref
       this.$refs.myButton.innerText= 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods : {
    onChange : function(){
      //Access instace from other vue instance
      vm1.title = 'Changed!';
    }
  }
});

//Is the same to el : '#app1'
vm1.$mount('#app');

var vm3 = new Vue({
  template : '<h1>Hello!</hello>'
});





