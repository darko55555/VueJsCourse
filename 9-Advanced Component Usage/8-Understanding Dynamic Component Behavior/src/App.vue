<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
            <button @click="selectedComponent = 'appQuote'">Quote</button>
            <button @click="selectedComponent = 'appAuthor'">Author</button>
            <button @click="selectedComponent = 'appNew'">New</button>
            <p>Selected Component: {{ selectedComponent }}</p>
              <component :is="selectedComponent">
                  <p>Default Content</p>
              </component>
               <!--<app-quote >
                  <h2 slot="title">{{ quoteTitle }}</h2>
                  <p>A wonderful Quote</p>
               </app-quote>-->
                <hr>

            </div>
        </div>
    </div>
</template>

<script>
    import Author from './components/Author.vue'
    import New from './components/New.vue'
    import Quote from './components/Quote.vue'

    export default {
      data : function () {
        return {
          quoteTitle : 'The Quote',
          selectedComponent : 'appQuote'
        }
      },
      components: {
        appQuote : Quote,
        appAuthor : Author,
        appNew : New
      }
    }
</script>

<style>
</style>
