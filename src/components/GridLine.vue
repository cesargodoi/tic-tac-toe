<template>
  <div id="line">
    <grid-item :num="n1" :player="player" @setItem="setItem" />
    <grid-item :num="n2" :player="player" @setItem="setItem" />
    <grid-item :num="n3" :player="player" @setItem="setItem" />
  </div>
</template>

<script>
import GridItem from "./GridItem.vue";
export default {
  components: { GridItem },
  props: { n1: String, n2: String, n3: String, player: String },
  methods: {
    setItem(num) {
      this.$emit("setItem", num);
    },
  },
  emits: ["setItem"],
};
</script>

<style scoped>
#line {
  display: flex;
  flex-direction: row;
}
</style>
