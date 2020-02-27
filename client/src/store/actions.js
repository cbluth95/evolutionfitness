import * as firebase from "firebase";
export default {
  userSignUp({ commit }, { email, password }) {
    commit("setLoading", true);
    commit("setError", null); // clear error
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        commit("setUser", user);
        commit("setIsAuthenticated", true);
        commit("setLoading", false);
      })
      .catch(err => {
        commit("setUser", null);
        commit("setIsAuthenticated", false);
        commit("setLoading", false);
        commit("setError", err);
      });
  }
  //   userSignIn({ commit }, { email, password }) {
  //     commit("setLoading", true);
  //     commit("clearError");
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword(email, password)
  //       .then(user => {
  //         commit("setUser", user);
  //         commit("setIsAuthenticated", true);
  //         router.push("/admin/dashboard");
  //         commit("setLoading", false);
  //       })
  //       .catch(error => {
  //         commit("setUser", null);
  //         commit("setIsAuthenticated", false);
  //         router.push("/signin");
  //         commit("setLoading", false);
  //         commit("setError", error);
  //         console.log(error);
  //       });
  //   },
  //   userSignOut({ commit }) {
  //     firebase
  //       .auth()
  //       .signOut()
  //       .then(() => {
  //         commit("setUser", null);
  //         commit("setIsAuthenticated", false);
  //         router.push("/");
  //       })
  //       .catch(() => {
  //         commit("setUser", null);
  //         commit("setIsAuthenticated", false);
  //         router.push("/");
  //       });
  //   }
};
