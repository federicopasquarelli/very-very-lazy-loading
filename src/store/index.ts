import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

interface Image {
  urls: Record<string, string>;
}

export const store = new Vuex.Store({
  state: {
    page: 0,
    loader: false,
    images: [] as Image[],
    ready: false,
  },
  mutations: {
    setPage(state) {
      state.page++;
    },
    setLoader(state, pl) {
      state.loader = pl;
    },
    setImages(state, pl) {
      state.images.push(...pl);
    },
    setReady(state, pl) {
      state.ready = pl;
    },
    setReset(state) {
      state.images = [];
      state.page = 0;
      state.ready = false;
      state.loader = false;
    },
  },
  actions: {
    fetchImages({ commit, getters }) {
      commit("setPage");
      commit("setLoader", true);
      fetch(
        `https://api.unsplash.com/photos/?client_id=${process.env.VUE_APP_NOT_SECRET_CODE}&per_page=100&page=${getters.getPage}`
      )
        .then((response) => response.json())
        .then((response) => {
          commit("setImages", response);
          if (!getters.getReady) commit("setReady", true);
          commit("setLoader", false);
        })
        .catch((err) => {
          commit("setLoader", false);
        });
    },
  },
  getters: {
    getImages: (state) => {
      return state.images;
    },
    getPage: (state) => {
      return state.page;
    },
    getReady: (state) => {
      return state.ready;
    },
    getLoader: (state) => {
      return state.loader;
    },
  },
});
