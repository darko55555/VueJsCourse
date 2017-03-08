<template>
    <div>
      <h3>Some User Details</h3>
      <p>User lodaded has ID: {{ $route.params.id }}</p>
      <router-link tag="button" :to="link"
      class="btn btn-primary">Edit</router-link>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        link : {
          name : 'userEdit',
           params : { id : this.$route.params.id },
           query : { locale : 'en', q: 100 },
           hash : '#data'
         }
      }
    },
    beforeRouteEnter(to, from, next) {
      if(true) { //change to  the condition you want
        next(vm => {
          vm.link;
        });
      } else {
       next(false);
      }
       console.log('Component before route enter');
       //this.link doesn't work because is not created yet
       //This sould be done as next

    }
  }
</script>
