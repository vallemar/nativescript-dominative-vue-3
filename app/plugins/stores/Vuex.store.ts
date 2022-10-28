import { createStore } from 'vuex'

// Create a new store instance.
const vuexStore = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

export {
    vuexStore
}