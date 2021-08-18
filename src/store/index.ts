import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import RootState from "@/types/RootState";
import { nodes } from "./nodes/index";
import VuexORM from '@vuex-orm/core'
import Nodes from './models/Nodes';

Vue.use(Vuex);

// Create a new instance of Database.
const database = new VuexORM.Database();

// Register Models to Database.
database.register(Nodes);

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
});

export default store;
