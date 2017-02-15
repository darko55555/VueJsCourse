<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <!--This is an example which no works.
              It this doesn0t works.
              To pass html to the child . It will work in the next exercise with slots. -->
               <app-quote >
                  <h2>{{ quoteTitle }}</h2>
                  <p>A wonderful Quote</p>
               </app-quote>

            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'

    export default {
      data : function () {
        return {
          quoteTitle : 'The Quote'
        }
      },
      components: {
        appQuote : Quote
      }
    }
</script>

<style>
</style>
