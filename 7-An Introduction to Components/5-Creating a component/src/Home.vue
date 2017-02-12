<template>
  <div>
    <p>Server Status: {{ status }} </p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
  export default {
    data : function() {
      return {
        status : 'Critical'
      }
    },
    methods : {
      //It can created as below (not need function())
      changeStatus () {
        this.status = 'Normal';
      }
    }
  }
</script>
