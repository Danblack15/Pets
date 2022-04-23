import axios from 'axios'

export const DataModule = {
    state: () => ({
        statisticLikesData: [],
        postsData: [],
        allPets: [],
        groupPets: [],
        loadingHome: true,
        mediaMenu: false
    }),

    getters: {
        statisticLikes(state) {
            return state.statisticLikesData
        },
        getPostsData(state) {
            return state.postsData
        },
        getAllPets(state) {
            return state.allPets
        },
        getGroupPets(state) {
            return state.groupPets
        },
        getLoadingHome(state) {
            return state.loadingHome
        },
        getMediaMenu(state) {
            return state.mediaMenu
        }
    },

    mutations: {
        setStatisticLikes(state, data) {
            state.statisticLikesData = data
        },
        setPostsData(state, data) {
            state.postsData = data
        },
        setAllPets(state, data) {
            state.allPets = data
        },
        setGroupPets(state, data) {
            state.groupPets = data
        },
        setLoadingHome(state, data) {
            state.loadingHome = data
        },
        setMediaMenu(state, data) {
            state.mediaMenu = data
        }
    },

    actions: {
        async postsData({dispatch, commit}) {
            try {
                const api = 'https://yvladandmir.github.io/dataForPets/posts.json'
                const res = await axios.get(api)

                commit('setPostsData', res.data)
            } catch {
                alert('Ошибка')
            }
        },

        async likesData({dispatch, commit}) {
            try {
                const api = 'https://yvladandmir.github.io/dataForPets/statistic.json'
                const res = await axios.get(api)

                commit('setStatisticLikes', res.data)
            } catch {
                alert('Ошибка')
            }
        },

        async allPets({dispatch, commit}) {
            try {
                const api = 'https://yvladandmir.github.io/dataForPets/animals.json'
                const res = await axios.get(api)

                commit('setAllPets', res.data)
            } catch {
                alert('Ошибка')
            }
        },

        async groupPets({commit}) {
            try {
                const api = 'https://yvladandmir.github.io/dataForPets/groups.json'
                const res = await axios.get(api)

                commit('setGroupPets', res.data)
                commit('setLoadingHome', false)
            } catch {
                alert('Ошибка')
            }
        },

        showMediaMenu({state, commit}) {
            commit('setMediaMenu', !state.mediaMenu)
        }
    },

    namespaced: true
}