import { createStore } from 'vuex'

const vuexStore = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state: any) {
            state.count++
        }
    }
})

export {
    vuexStore
}