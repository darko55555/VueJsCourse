<template>
    <p>Server Status : {{ status }}</p>
</template>

<script>
export default {
  //Data must be a function
  data : function() {
   return {
      status : 'Critical'
    }
  }
}
</script>

<style>
</style>
