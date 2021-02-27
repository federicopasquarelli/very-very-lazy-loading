import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    page: {
      title: "",
      content: []
    }
  },
  mutations: {
    setPageContent(state, pl) {
      state.page = pl;
    }
  },
  actions: {
    async fetchPageContent(context) {
      await fetch(`${process.env.VUE_APP_API}/features`)
        .then(response => response.json())
        .then(response => {
          context.commit("setPageContent", response);
        })
        .catch(err => console.log(err));
    }
  },
  getters: {
    getPageContent: state => {
      return state.page;
    }
  }
});
