import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const getDefaultState = () => {
  return {
    page: 0,
    loader: false,
    images: [] as any[],
    ready: false,
  };
};

// initial state
const state = getDefaultState();

export const store = new Vuex.Store({
  state,
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
      state = { ...getDefaultState() };
    },
  },
  actions: {
    async fetchImages({ commit, getters }) {
      commit("setPage");
      commit("setLoader", true);
      await fetch(
        `https://pixabay.com/api/?key=${process.env.VUE_APP_NOT_SECRET_CODE}&per_page=100&page=${getters.getPage}&image_type=photo&category=places`
      )
        .then((response) => response.json())
        .then((response) => {
          commit("setImages", response.hits);
          if (!getters.getReady) commit("setReady", true);
          commit("setLoader", true);
        })
        .catch((err) => console.log(err));
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
