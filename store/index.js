
import { GET_ME, GET_CONFIG } from '~/graphql/query'

export const state = () => ({
  user:null,

  isAuthenticated: false,
  isOpen: false,
  setting: {},
})

export const getters = {
  user: (state) => state.user,
  isAuthenticated: (state) => state.isAuthenticated,
  isOpen: (state) => state.isOpen,
  setting: (state) => state.setting,
}

export const mutations = {

  setUser(state, param) {
    state.isAuthenticated = true;
    state.user = param.user;

    if(param.isLogin){
      this.$router.push({path: `/${param.user.role}/dashboard`})
      // this.$router.push('/')
    }else{
      this.$router.push('/')
    }
  },

  setSetting(state, setting) {
    state.setting = setting;
    state.error = null;
  },

  logoutUser(state) {
    this.$apolloHelpers.onLogout();
    state.isAuthenticated = false;
    state.user = null;
    this.$router.push("/")
  },

  setOpen(state) {
    state.isOpen = !state.isOpen;
  },

  setClose(state) {
    state.isOpen = false;
  },

}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    let client = context.app.apolloProvider.defaultClient
    try {
      const { data } = await client.query({ query: GET_CONFIG });
      console.log("setting in store", data);
      commit("setSetting", data.getConfig);
    } catch (error) {
      console.log(error);
    }

    const token = this.$apolloHelpers.getToken();
    console.log("store token",token);
    if (token) {
      try {
        const { data } = await client.query({ query: GET_ME })
        console.log("getme in store", data);
        commit('setUser', {user: data.me, isLogin: false})
      } catch (error) {
        commit('logoutUser')
        console.log(error);
      }
    }
    else {
      commit('logoutUser')
    }
  },

  async loadMe({ commit }) {
    let client = this.app.apolloProvider.defaultClient
    try {
      const { data } = await client.query({ query: GET_ME })
      commit('setUser', {user: data.me, isLogin: false})
    } catch (error) {
      console.log(error);
    }
  },

  async loadSetting({ commit }) {
    let client = this.app.apolloProvider.defaultClient
    try {
      const { data } = await client.query({ query: GET_CONFIG });
      commit("setSetting", data.getConfig);
    } catch (error) {
      console.log(error);
    }
  },
}
