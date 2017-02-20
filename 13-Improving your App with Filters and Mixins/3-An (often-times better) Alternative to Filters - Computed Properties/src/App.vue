<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | toLowercase}}</p>
                <hr>
                <input v-model="filterText"></input>
                <ul>
                  <li v-for="fruit in filterFruits">{{  fruit }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          text : 'Hello there!',
          fruits : ['Apple', 'Banana', 'Mango', 'Melon'],
          filterText : ''
        };
      },
      //Local
      filters : {
        toUppercase(value) {
          return value.toUpperCase();
        }
      },
      computed : {
        filterFruits() {
          return this.fruits.filter((element) => {
              return element.match(this.filterText);
          });
        }
      }
    }
</script>

<style>

</style>
