<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Main from "./components/Main.vue";



@Component({
  components: {
    Main,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Source Code Pro", "HexEd.it Symbols", "Courier New", Consolas, Menlo, "PT Mono", "Liberation Mono", monospace;
}

.offset {
  background-color: rgb(237,237,237);
  margin-right: 10px;
}
</style>
