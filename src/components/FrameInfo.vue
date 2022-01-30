<template>
<div>
  <div v-if="frame !== undefined" style="padding-left: 30px">
    <h3>adts frame info</h3>

    <table v-if="frame.error === undefined">
      <tr>
        <td>syncword</td>
        <td>{{frame.syncword}} (12 bits)</td>
      </tr>
      <tr>
        <td>mpeg version</td>
        <td>{{frame.mpeg_version}} (1 bit)</td>
      </tr>
      <tr>
        <td>layer</td>
        <td>{{frame.layer}} (2 bits)</td>
      </tr>
      <tr>
        <td>protection_absent</td>
        <td>{{frame.protection_absent}} (1 bit)</td>
      </tr>
      <tr>
        <td>profile</td>
        <td>{{frame.profile}} (2 bits)</td>
      </tr>
      <tr>
        <td>sampling_frequency</td>
        <td>{{frame.sampling_frequency}} (4 bits)</td>
      </tr><tr>
      <td>private_bit</td>
      <td>{{frame.private_bit}} (1 bit)</td>
    </tr>
      <tr>
        <td>channel_configuration</td>
        <td>{{frame.channel_configuration}} (3 bits)</td>
      </tr>
      <tr>
        <td>mpeg original_copy</td>
        <td>{{frame.original_copy}} (1 bit)</td>
      </tr>
      <tr>
        <td>home</td>
        <td>{{frame.home}} (1 bit)</td>
      </tr>

      <tr>
        <td>copyright_identification_bit</td>
        <td>{{frame.copyright_identification_bit}} (1 bit)</td>
      </tr>
      <tr>
        <td>copyright_identification_start</td>
        <td>{{frame.copyright_identification_start}} (1 bit) </td>
      </tr>
      <tr>
        <td>frame_length</td>
        <td>{{ frame.length }} (13 bits)</td>
      </tr>
      <tr>
        <td>adts_buffer_fullness</td>
        <td>{{frame.adts_buffer_fullness}} (11 bits)</td>
      </tr>
      <tr>
        <td>number_of_raw_data_blocks_in_frame</td>
        <td>{{frame.number_of_raw_data_blocks_in_frame}} (2 bits)</td>
      </tr>
      <tr v-if="frame.protection_absent === 0">
        <td>crc</td>
        <td>{{frame.crc}} (16 bits)</td>
      </tr>
      <tr>
        <td>aac data</td>
        <td style="word-wrap:break-word;word-break: break-all;max-width: 500px">{{frame.getData()}}</td>
      </tr>
    </table>
    <p v-if="frame.error !== undefined" style="color: red">
      error: {{frame.error}}
    </p>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AdtsFrame from "../lib/adts-frame";
import {AppState} from "../lib/app-state";
import {AdtsParser} from "@/lib/adts-parser";

@Component({
  components: {}
})
export default class FrameInfo extends Vue {
  @Prop() frame: AdtsFrame | undefined;
  appState = AppState.getInstance();

}
</script>

<style scoped>

</style>