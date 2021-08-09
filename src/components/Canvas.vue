<template lang="pug">
  .canvas-wrapper
    canvas(id="myCanvas" @drop="onDrop($event)"
          @dragover.prevent @dragenter.prevent)
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, namespace } from "vuex-class";
import INode from "../types/Node";
const nodesModule = namespace("nodes");

@Component({})
export default class Canvas extends Vue {
  @nodesModule.Getter("getNodes")
  getNodes!: INode[];
  @nodesModule.Getter("getConnectedNodes")
  getConnectedNodes!: INode[];

  ctx: CanvasRenderingContext2D = null;
  vueCanvas: CanvasRenderingContext2D = null;

  @Prop() private width!: number;
  @Prop() private height!: number;
  @Prop() private size!: number;

  onDrop(e: DragEvent): void {
    const itemId: number = e.dataTransfer.getData("itemId") as number;
    const item: INode = this.getNodes.find((el) => el.id === itemId);
    const idx = this.getNodes.indexOf(item);
    this.getNodes[idx].x = e.clientX;
    this.getNodes[idx].y = e.clientY;
    this.updateConnect(this.getConnectedNodes);
  }

  updateConnect(elements: INode[]): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (let i = 0; i < elements.length - 1; i++) {
      this.drawLine(
        elements[i].x,
        elements[i + 1].x,
        elements[i].y,
        elements[i + 1].y
      );
    }
  }

  drawLine(x1: number, x2: number, y1: number, y2: number): void {
    this.ctx.beginPath();
    this.ctx.moveTo(x1 + this.size / 2, y1 + this.size / 2);
    this.ctx.lineTo(x2 + this.size / 2, y2 + this.size / 2);
    this.ctx.stroke();
  }

  mounted() {
    const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = this.width;
    canvas.height = this.height;
    this.vueCanvas = this.ctx;

    for (let n = 0; n < 3; n++) {
      this.$parent.addNode();
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/canvas.scss";
</style>
