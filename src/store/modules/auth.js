import * as types from "../types";

const state = {
  isLoggedIn: false,
  user: {
    username: "",
    role: "",
    token: "",
    permissions: []
  }
};

const getters = {
  [types.IS_LOGGED_IN]: state => {
    return state.isLoggedIn;
  },
  [types.USER]: state => {
    return state.user;
  }
};

const mutations = {
  [types.MUTATE_LOGIN]: (state, payload) => {
    state.isLoggedIn = true;
    state.user = payload.user;
  },
  [types.MUTATE_LOGOUT]: state => {
    state.isLoggedIn = false;
    state.user = {
      username: "",
      role: "",
      token: "",
      permissions: []
    };
  }
};

const actions = {
  [types.LOGIN]: ({ commit }, payload) => {
    commit(types.MUTATE_LOGIN, payload);
  },
  [types.LOGOUT]: ({ commit }, payload) => {
    commit(types.MUTATE_LOGOUT, payload);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
