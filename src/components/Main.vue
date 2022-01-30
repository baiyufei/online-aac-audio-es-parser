<template>
  <div>
    <div style="margin-left: 30px; display: flex; align-items:center">
      <h2>AAC Audio ES Parser</h2>
      <Upload @onDataReady="onDataReady"></Upload>
    </div>

    <div style="display: flex">
      <div style="width: 700px;flex-shrink:0; padding-left: 30px">
        <Summary v-bind:adts-parser="adtsParser"></Summary>
        <Hex ref="hex"></Hex>
      </div>
      <div>
        <FrameInfo v-bind:frame="adtsParser.adtsFrames[appState.currentSelectIndex]"></FrameInfo>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {AdtsParser} from "@/lib/adts-parser";
import Summary from "@/components/Summary.vue";
import Upload from "./Upload.vue";
import {AppState, AppStateListener} from "@/lib/app-state";
import FrameInfo from "@/components/FrameInfo.vue";
import Hex from "@/components/Hex.vue";

@Component({
  components: {Summary, Upload, FrameInfo, Hex}
})
export default class Main extends Vue implements AppStateListener{
  adtsParser = new AdtsParser()
  appState: AppState;

  $refs!: {
    hex: Hex
  }
  constructor() {
    super();
    this.appState = AppState.getInstance();
    this.appState.listener = this;
  }

  onDataReady(data: Uint8Array) {
    this.adtsParser.parse(data);
    this.$refs.hex.update(data);
  }

  onStatChange() {
    this.appState.highLightStart= this.getHexHighlightStart();
    this.appState.highLightEnd = this.getHexHighlightEnd();
    this.appState.aacDataHighLightStart = this.getDataHighLightStart();
    this.$refs.hex.jump(this.appState.highLightStart/16 - 1);
  }



  getHexHighlightStart(): number {
    const si = this.appState.currentSelectIndex;
    return this.adtsParser.adtsFrames[si].start;
  }

  getHexHighlightEnd(): number {
    const si = this.appState.currentSelectIndex;
    return this.adtsParser.adtsFrames[si].start + this.adtsParser.adtsFrames[si].length;
  }

  getDataHighLightStart(): number {
    const si = this.appState.currentSelectIndex;
    return this.adtsParser.adtsFrames[si].start + this.adtsParser.adtsFrames[si].aac_offset;
  }
}
</script>

<style scoped>

</style>