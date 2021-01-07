<template>
  <div id="grid-line">
    <grid-item
      :num="n1"
      :player="player"
      :winner="winner"
      :winSeq="winSeq"
      :reset="reset"
      @setItem="setItem"
    />
    <grid-item
      :num="n2"
      :player="player"
      :winner="winner"
      :winSeq="winSeq"
      :reset="reset"
      @setItem="setItem"
    />
    <grid-item
      :num="n3"
      :player="player"
      :winner="winner"
      :winSeq="winSeq"
      :reset="reset"
      @setItem="setItem"
    />
  </div>
</template>

<script>
import GridItem from "./GridItem.vue";
export default {
  components: { GridItem },
  props: {
    n1: String,
    n2: String,
    n3: String,
    player: String,
    winner: String,
    winSeq: Array,
    reset: Boolean,
  },
  methods: {
    setItem(num) {
      this.$emit("setItem", num);
    },
  },
  emits: ["setItem"],
};
</script>

<style scoped>
#grid-line {
  display: flex;
  flex-direction: row;
}
</style>
