<template>
  <div>
    <div style="cursor:pointer" v-on:click="onClick" :class="{ active: this.appState.currentSelectIndex === source.index }">
      <span class="offset">0x{{source.start.toString(16).padStart(8, '0')}}</span>
      <span>{{source.mpeg_version}} </span>
      <span>{{source.profile}} </span>
      <span>{{source.sampling_frequency}} </span>
      <span>{{source.channel_configuration}} </span>
      <span>{{ source.length }} </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AdtsFrame from "../lib/adts-frame";
import {AppState} from "../lib/app-state";

@Component({
  components: {}
})
export default class FrameLine extends Vue {
  @Prop() source!: AdtsFrame;
  appState = AppState.getInstance();

  onClick() {
    this.appState.currentSelectIndex = this.source.index;
  }

}
</script>

<style scoped>
.active {
  background-color: yellow;
}

span {
  display: inline-block;
  width: 110px;
}
</style>