import { Module } from "vuex";
import RootState from "../../types/RootState";
import getters from "./getters/index";
import mutations from "./mutations/index";
import INodeState from "@/types/NodeState";

export const state: INodeState = {
  nodes: [],
  connectedNodes: [],
  connectedIds: [],
};

const namespaced = true;

export const nodes: Module<INodeState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
};
