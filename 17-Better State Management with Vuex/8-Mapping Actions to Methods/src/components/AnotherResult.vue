<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p> Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
      computed : {
        ...mapGetters([
          //Info you can also pass an Object and map the getter to different names!
          //Example: mapGetters({ propertyName : 'doubleCounter' })
          'doubleCounter',
          'stringCounter'
          ])
        /*counter() {
          return this.$store.getters.doubleCounter;
        },
        clicks () {
          return this.$store.getters.stringCounter;
        }*/
      }
    }
</script>
