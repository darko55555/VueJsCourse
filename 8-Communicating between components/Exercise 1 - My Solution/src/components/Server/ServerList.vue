<template>
    <ul class="list-group">
        <li
            class="list-group-item"
            v-for="(value, index) in servers"
            @click="getInfoServer(index)">
            Server #{{ value.id }}
        </li>
    </ul>

</template>

<script>
   export default {
    props : ['servers'],
    methods : {
      getInfoServer(index) {
        this.$emit('serverInfo', this.servers[index]);
      }
    }
  }
</script>

<style>

</style>
