<template>
    <div class="container">
        <div class="row">
            <header-server></header-server>
        </div>
        <hr>
        <app-server-detail-list></app-server-detail-list>
        <hr>
        <footer-server></footer-server>
    </div>
</template>

<script>
import ServerDetailList  from './ServerDetailList.vue';
import Footer  from './Footer.vue';
import Header  from './Header.vue';

  export default {
    components : {
      'app-server-detail-list' : ServerDetailList,
      'footer-server' : Footer,
      'header-server' : Header
    }
  }
</script>

<style>

</style>
