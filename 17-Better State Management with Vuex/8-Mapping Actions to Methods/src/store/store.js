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
      increment : (state, payLoad) => {
        state.counter += payLoad;
      },
      decrement : (state, payLoad) => {
        state.counter -= payLoad;
      }
    },
    actions : {
      increment : ({ commit }, payLoad) => {
        commit('increment', payLoad);
      },
      decrement : ({ commit }, payLoad) => {
        commit('decrement', payLoad);
      },
      asyncIncrement : ({ commit }, payLoad) => {
        setTimeout(() => {
          commit('increment', payLoad.by);
        }, payLoad.duration);
      },
      asyncDecrement : ({ commit }, payLoad) => {
        setTimeout(() => {
          commit('decrement', payLoad.by);
        }, payLoad.duration);
      }
    }
});
