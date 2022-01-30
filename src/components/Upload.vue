<template>
<div>
  <button style="margin-left:30px; font-size: 20px" v-on:click="openFile()">open file
    <input ref="in" type="file" style="display:none" v-on:change="handle($event)">
  </button>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Upload extends Vue {
  $refs!: {
    in: HTMLInputElement
  }
  @Prop() private msg!: string;

  openFile(){
    this.$refs.in.click();
  }

  handle(e: any){
    if (this.$refs.in.files) {
      let file = this.$refs.in.files[0];
      if (file) {
        var reader = new FileReader();
        reader.onload = (e) => {
          // binary data
          let data = new Uint8Array(e?.target?.result as ArrayBuffer);
          this.$emit('onDataReady', data);
        };
        reader.onerror = function(e) {
          alert(e);
        };
        reader.readAsArrayBuffer(file);
      }
    }
  }
}
</script>

<style scoped>

</style>