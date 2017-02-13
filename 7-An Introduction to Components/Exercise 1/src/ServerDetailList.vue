<template>
  <div>
     <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-server-list></app-server-list>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
  </div>
</template>

<script>
import ServerList  from './ServerList.vue';

  export default {
    components : {
      'app-server-list' : ServerList
    }
  }
</script>
