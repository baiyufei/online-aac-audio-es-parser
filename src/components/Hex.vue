<template>
  <div style="padding-top: 20px">
    <h3>hex view</h3>
    <div>
      <virtual-list ref="sc" style="height: 400px; overflow-y: auto;"
                    :data-key="'index'"
                    :data-sources="this.datas"
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
import TwoBytes from "@/lib/two-bytes";
import HexLine from "@/components/HexLine.vue";


@Component({
  components: {HexLine, VirtualList}
})
export default class Hex extends Vue {
  datas: TwoBytes[];

  $refs!: {
    sc: any
  }

  itemComponent = HexLine;

  constructor() {
    super();
    this.datas = [];
  }

  update(data: Uint8Array) {
    this.datas = [];
    let offset = 0;
    let index = 0;
    while(offset < data.length) {
      let next = offset + 16;
      if (next > data.length) {
        next = data.length;
      }
      let twoBytes = new TwoBytes(index);
      for (let i = offset; i < next; i++) {
        twoBytes.store.push(data[i].toString(16).padStart(2, '0').toUpperCase())
      }
      this.datas.push(twoBytes);
      offset = next;
      index++;
    }
  }

  jump(to: number) {
    this.$refs.sc.scrollToIndex(to);
  }
}
</script>

<style scoped>

</style>