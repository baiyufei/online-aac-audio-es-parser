<template>
  <div>
    <!-- <div v-for="(adtsFrame, index) in adtsParser.adtsFrames" :key="index">
      <FrameLine :source="adtsFrame"></FrameLine>
    </div> -->

    <div style="padding-bottom: 10px">
      <span class="offset">offset</span>
      <span>ID</span>
      <span>profile</span>
      <span>sample</span>
      <span>channel</span>
      <span>length</span>
    </div>
    <div>
      <virtual-list ref="foo" style="height: 360px; overflow-y: auto;"
                    :data-key="'index'"
                    :data-sources="adtsParser.adtsFrames"
                    :data-component="itemComponent"
      />
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {AdtsParser} from "@/lib/adts-parser";
import FrameLine from "./FrameLine.vue";
import VirtualList from 'vue-virtual-scroll-list';

@Component({
  components: {FrameLine, VirtualList}
})
export default class Summary extends Vue {
  $refs!: {
    foo: any
  }

  @Prop()  adtsParser!: AdtsParser;
  itemComponent = FrameLine;

  constructor() {
    super();
  }
}
</script>

<style scoped>
span {
  display: inline-block;
  width: 110px;
}
</style>