import axios from 'axios'

export const DataModule = {
    state: () => ({
        statisticLikesData: []
    }),

    getters: {
        statisticLikes(state) {
            return state.statisticLikesData
        }
    },

    mutations: {
        setStatisticLikes(state, data) {
            state.statisticLikesData = data
        }
    },

    actions: {
        async likesData({state, commit}) {
            try {
                const api = 'https://yvladandmir.github.io/dataForPets/statistic.json'
                const res = await axios.get(api)

                commit('setStatisticLikes', res.data)
            } catch {

            }
        }
    },

    namespaced: true
}