<template>
    <div class="col-xs-12 col-sm-6">
        <server-list
          :servers="servers"
          @serverInfo="getInfoServer($event)"></server-list>
    </div>
</template>

<script>
  import ServerList from './ServerList.vue';

  export default {
    data : function (){
      return {
        servers : [
        {id : 1, status : 'Normal'},
        {id : 2, status : 'Critical'},
        {id : 3, status : 'Unknown'},
        {id : 4, status : 'Normal'}
        ]
      }
    },
    components: {
        'server-list': ServerList
    },
    methods : {
       getInfoServer(serverData) {
        console.log("Servers: " + serverData.id);
        this.$emit('serverInfo', serverData);
      }
    }
  }
</script>

<style>

</style>
