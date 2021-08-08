import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import RootState from "@/types/RootState";
import { nodes } from "./nodes/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    nodes,
  },
};

export default new Vuex.Store<RootState>(store);
