<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="serverData.id === 0">Server Details are currently not updated</p>
        <p v-if="serverData.id > 0">Server: {{ serverData.id }} - Status:  {{ serverData.status }}</p>
    </div>

</template>

<script>
  import ServerList from './ServerList.vue';

  export default {
   props : ['serverData']

  }
</script>

<style>

</style>
