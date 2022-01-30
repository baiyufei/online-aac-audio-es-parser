<template>

  <div>
    <span class="offset" style="display: inline-block; width: 110px">0x{{source.offset}}</span>
    <span v-for="(b, index) in source.store" :key="index"
          :class="{ frameHead: shouldHighLightHead(index), frameData: shouldHighLightData(index) }">
      {{b.toString(16)}}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {AppState} from "../lib/app-state";
import TwoBytes from "@/lib/two-bytes";

@Component({
  components: {}
})
export default class HexLine extends Vue {
  @Prop() source!: TwoBytes;
  appState = AppState.getInstance();

  shouldHighLightHead(col: number): boolean {
    let i = this.source.index * 16 + col;
    return i < this.appState.aacDataHighLightStart && i >= this.appState.highLightStart;
  }

  shouldHighLightData(col: number): boolean {
    let i = this.source.index * 16 + col;
    return i < this.appState.highLightEnd && i >= this.appState.aacDataHighLightStart;
  }
}
</script>

<style scoped>
.frameHead {
  background-color: rgb(200,200,200);
}

.frameData{
  background-color: yellow;
}
</style>