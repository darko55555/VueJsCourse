import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      counter: 0
    },
    getters : {
      doubleCounter : state => {
        return state.counter * 2;
      },
      stringCounter : state => {
        return state.counter + ' Clicks';
      }
    },
    mutations : {
      increment : state => {
        //Allways must to be shyncronous it would not work setTimeOut() for example
        state.counter++;
      },
      decrement : state => {
        state.counter--;
      }
    }
});
