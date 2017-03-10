const state = {
  counter: 0
};

const getters = {
  doubleCounter : state => {
        return state.counter * 2;
  },
  stringCounter : state => {
    return state.counter + ' Clicks';
  }
};

const mutations = {
    increment : (state, payLoad) => {
      state.counter += payLoad;
    },
    decrement : (state, payLoad) => {
      state.counter -= payLoad;
    }
};

const actions = {
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
};

export default {
  state, //same as state : state
  mutations,
  actions,
  getters
}
