import { GetterTree } from "vuex";
import RootState from "@/types/RootState";
import INodeState from "@/types/NodeState";

//getters
const getters: GetterTree<INodeState, RootState> = {
  getNodes({ nodes }: INodeState) {
    return nodes;
  },
  getConnectedNodes({ connectedNodes }: INodeState) {
    return connectedNodes;
  },
  getConnectedIds({ connectedIds }: INodeState) {
    return connectedIds;
  },
};

export default getters;
