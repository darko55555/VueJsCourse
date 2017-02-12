<template>
  <div>
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>

<script>
  import ServiceStatus  from './ServerStatus.vue';

  export default {
    components : {
      'app-server-status' : ServiceStatus
    }
  }
</script>
