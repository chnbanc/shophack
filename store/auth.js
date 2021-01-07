export const state = () => ({
    token: null,
    user: null
  })


  export const getters = {
    authenticated(state) {
        return state.token && state.user
    },

    user (state) {
        return state.user
    }
  }


  export const mutations = {
    SET_TOKEN (state, token) {
        state.token = token
    },

    SET_USER (state, data) {
        state.user = data
    }
  }

  export const actions = {
    async signIn ({ dispatch }, credentials){
        let response = await axios.post('/login', credentials)

        return dispatch('setUser', response.data.accessToken)
    },
    async setUser ({ commit, state }, token) {
        if (token){
            commit('SET_TOKEN', token)
        }

        if (!state.token){
            return
        }

        try {
            let response = await axios.get('person')
            commit ('SET_USER', response.data)
        } catch (e) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
        }
    },

    signOut ({ commit }) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
    },
    async signIn ({ dispatch }, credentials){
        let response = await axios.post('/login', credentials)

        return dispatch('setUser', response.data.accessToken)
    },
    async setUser ({ commit, state }, token) {
        if (token){
            commit('SET_TOKEN', token)
        }

        if (!state.token){
            return
        }

        try {
            let response = await axios.get('person')
            commit ('SET_USER', response.data)
        } catch (e) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
        }
    },

    signOut ({ commit }) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
    },

  }
  