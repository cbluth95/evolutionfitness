export default {
  setLoading(state, payload) {
    state.loading = payload;
  },
  setUser(state, payload) {
    state.user = payload;
  },
  setIsAuth(state, payload) {
    state.isAuth = payload;
  },
  // used to set and clear global errors
  setError(state, payload) {
    state.error = payload;
  }
};
