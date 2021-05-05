//https://medium.com/codingthesmartway-com-blog/vue-js-2-state-management-with-vuex-introduction-db26cb495113
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    count: 0
}

const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

//Modifying State
//synchronously By Using Mutations
const mutations = {
    increment(state) {
        console.log('increment');
        state.count++
    },
    decrement(state) {
        console.log('decrement');
        state.count--
    }
}
//asynchronously By Using Actions
/*
 *Each Action handler function can receive two parameters, a context object giving us access to a commit method and the current state and a optional payload object.
 * increment (context, payload)
 * */

const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            }, 1000)
        })
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

