<template lang="pug">
  .node(:ref="nodeId+'|'+index" @click="doNodeConnect"
        @dblclick="deleteElem" draggable="true"
        @dragstart="handleDragstart($event)"
        @dragend="handleDragend($event)")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, namespace } from "vuex-class";
import INode from "../types/Node";
const nodesModule = namespace("nodes");

@Component({})
export default class Node extends Vue {
  @Prop() private nodeId!: number;
  @Prop() private index!: number;
  @Prop() private width!: number;
  @Prop() private height!: number;

  @nodesModule.Getter("getNodes")
  getNodes: INode[];
  @nodesModule.Getter("getConnectedNodes")
  getConnectedNodes: INode[];
  @nodesModule.Getter("getConnectedIds")
  getConnectedIds: number[];

  @nodesModule.Mutation("SET_NODE_CONNECTED")
  SET_NODE_CONNECTED: any;
  @nodesModule.Mutation("UPDATE_CONNECTED_NODES")
  UPDATE_CONNECTED_NODES: any;
  @nodesModule.Mutation("UPDATE_CONNECTED_IDS")
  UPDATE_CONNECTED_IDS: any;
  @nodesModule.Mutation("REMOVE_NODE_BY_IDX")
  REMOVE_NODE_BY_IDX: any;

  isNodeClicked = false;
  dragItemId = null;

  doNodeConnect(): void {
    let canvas = null;
    this.$parent.$children.forEach((ref) => {
      if (Object.entries(ref.$el)[0][1] === "canvas-wrapper") {
        canvas = ref;
        return;
      }
    });

    if (canvas != null) {
      canvas.ctx.clearRect(0, 0, this.width, this.height);
    }

    const node = this.$refs[`${this.nodeId}|${this.index}`] as HTMLElement;

    if (!this.isNodeClicked) {
      if (node != null) {
        node.classList.add("connected");
      }
    } else {
      if (node != null) {
        node.classList.remove("connected");
      }
    }

    if (this.getConnectedIds.includes(this.nodeId)) {
      const connectedElements = this.getConnectedNodes.filter(
        (el) => el.id !== this.nodeId
      );
      this.UPDATE_CONNECTED_NODES(connectedElements);
      const connectedIds = this.getConnectedIds.filter(
        (el) => el !== this.nodeId
      );
      this.UPDATE_CONNECTED_IDS(connectedIds);
    } else {
      this.UPDATE_CONNECTED_IDS([this.getNodes[this.index].id]);
      this.SET_NODE_CONNECTED(this.index);
      let connectedArr = this.getConnectedNodes.slice();
      connectedArr.push(this.getNodes[this.index]);
      this.UPDATE_CONNECTED_NODES(connectedArr);
      connectedArr = null;
    }

    const connectElemLength = this.getConnectedIds.length;

    if (connectElemLength > 1) {
      this.SET_NODE_CONNECTED(this.index);
      const filteredNodes = this.getNodes.filter(
        (el) => el.connected === this.getConnectedIds[0]
      );

      for (let i = 0; i < filteredNodes.length - 1; i++) {
        if (canvas != null) {
          canvas.drawLine(
            filteredNodes[i].x,
            filteredNodes[i + 1].x,
            filteredNodes[i].y,
            filteredNodes[i + 1].y
          );
        }
      }
    }

    if (canvas != null) {
      canvas.updateConnect(this.getConnectedNodes);
    }
  }

  deleteElem(): void {
    let canvas = null;
    this.$parent.$children.forEach((ref) => {
      if (Object.entries(ref.$el)[0][1] === "canvas-wrapper") {
        canvas = ref;
        return;
      }
    });

    // this.connectId = this.getConnectedIds.filter((el) => el !== this.nodeId);

    const connectedNodes = this.getConnectedNodes.filter((el) => el.id !== this.nodeId);
    this.UPDATE_CONNECTED_NODES(connectedNodes);
    this.REMOVE_NODE_BY_IDX(this.index);

    if (canvas != null) {
      canvas.updateConnect(this.getConnectedNodes);
    }
  }

  handleDragstart(e: DragEvent, idx, id): void {
    const target = e.target as HTMLDivElement;
    target.classList.add("stunned");

    setTimeout(() => {
      const target = e.target as HTMLDivElement;
      target.classList.add("hide");
    }, 0);
    this.dragItemId = this.nodeId;
    const item: INode = this.getNodes.find((el) => el.id === this.dragItemId);
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("itemId", '' + item.id);
  }

  handleDragend(e: DragEvent): void {
    const target1 = e.target as HTMLDivElement;
    target1.classList.add("stunned");
    const target2 = e.target as HTMLDivElement;
    target2.classList.add("hide");
    this.dragItemId = null;
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/node.scss";
</style>
