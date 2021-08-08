<template lang="pug">
  #app
      .create-node
        button.create__btn(@click="addNode") Add new node

      Node(v-for="(node, idx) in getNodes" :key="node.id+Math.random()*10000"
            :style="{ top: node.y + 'px', left: node.x + 'px' }"
            :nodeId="node.id" :index="idx"
            :width="width" :height="height")

      Canvas(:width="width" :height="height" :size="size")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Mutation, namespace } from 'vuex-class';
import Canvas from "./components/Canvas.vue";
import Node from "./components/Node.vue";

import INode from "./types/Node";
const nodesModule = namespace('nodes');

@Component({
  components: {
    Canvas,
    Node,
  },
})
export default class App extends Vue {
  @nodesModule.Getter('getNodes')
  getNodes: INode[];
  @nodesModule.Getter('getConnectedNodes')
  getConnectedNodes: INode[];
  @nodesModule.Getter('getConnectedIds')
  getConnectedIds: number[];

  @nodesModule.Mutation('UPDATE_NODES')
  UPDATE_NODES: any;
  @nodesModule.Mutation('UPDATE_CONNECTED_NODES')
  UPDATE_CONNECTED_NODES: any;

  height = window.innerHeight;
  width = window.innerWidth;
  size = 50;

  randomId(num) {
    return Math.round(Math.random() * num).toString();
  }

  addNode(): void {
    this.UPDATE_NODES([{
      id: this.randomId(10000),
      x: Math.random() * (this.width - this.size),
      y: Math.random() * (this.height - this.size),
      connected: 0,
    }]);
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/app.scss';
</style>
