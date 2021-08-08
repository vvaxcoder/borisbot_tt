import INode from "@/types/Node";

export default interface INodeState {
  nodes: INode[];
  connectedNodes: INode[];
  connectedIds: number[];
}
