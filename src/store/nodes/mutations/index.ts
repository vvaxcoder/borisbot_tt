import { MutationTree } from "vuex";
import INodeState from "@/types/NodeState";
import INode from "@/types/Node";

//mutations
const mutations: MutationTree<INodeState> = {
  UPDATE_NODES(state: INodeState, payload: INode[]) {
    let { nodes } = state;
    nodes = [...state.nodes, ...payload];
    state.nodes = nodes;
  },
  REMOVE_NODE_BY_IDX(state: INodeState, payload: number) {
    const { nodes } = state;
    nodes.splice(payload, 1);
    state.nodes = nodes;
  },
  SET_NODE_CONNECTED(state: INodeState, payload: number) {
    const { nodes } = state;
    nodes[payload].connected = Number(nodes[payload].id);
    state.nodes = nodes;
  },
  UPDATE_CONNECTED_NODES(state: INodeState, payload: INode[]) {
    state.connectedNodes = payload;
  },
  UPDATE_CONNECTED_IDS(state: INodeState, payload: number[]) {
    state.connectedIds = payload;
  },
};

export default mutations;
