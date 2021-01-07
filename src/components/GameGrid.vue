<template>
  <grid-line
    n1="1"
    n2="2"
    n3="3"
    :player="player"
    :winner="winner"
    :winSeq="winSeq"
    @setItem="setItem"
  />
  <grid-line
    n1="4"
    n2="5"
    n3="6"
    :player="player"
    :winner="winner"
    :winSeq="winSeq"
    @setItem="setItem"
  />
  <grid-line
    n1="7"
    n2="8"
    n3="9"
    :player="player"
    :winner="winner"
    :winSeq="winSeq"
    @setItem="setItem"
  />
</template>

<script>
import GridLine from "./GridLine.vue";
export default {
  components: { GridLine },
  props: { player: String, winner: String, winSeq: Array },
  methods: {
    setItem(num) {
      this.$emit("setItem", num);
    },
  },
  emits: ["setItem"],
};
</script>

<style scoped></style>
