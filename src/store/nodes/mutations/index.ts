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
  SET_NODE_CONNECTED(state: INodeState, payload: number) {
    const { nodes } = state;
    nodes[payload].connected = nodes[payload].id;
    state.nodes = nodes;
  },
  UPDATE_CONNECTED_NODES(state: INodeState, payload: INode) {
    const { connectedNodes } = state;
    connectedNodes.push(payload);
    state.connectedNodes = connectedNodes;
  },
  UPDATE_CONNECTED_IDS(state: INodeState, payload: number[]) {
    let { connectedIds } = state;
    connectedIds = [...state.connectedIds, ...payload];
    state.connectedIds = connectedIds;
  },
};

export default mutations;
