<template>
  <grid-line n1="1" n2="2" n3="3" :player="player" @setItem="setItem" />
  <grid-line n1="4" n2="5" n3="6" :player="player" @setItem="setItem" />
  <grid-line n1="7" n2="8" n3="9" :player="player" @setItem="setItem" />
</template>

<script>
import GridLine from "./GridLine.vue";
export default {
  components: { GridLine },
  props: { player: String },
  methods: {
    setItem(num) {
      this.$emit("setItem", num);
    },
  },
  emits: ["setItem"],
};
</script>

<style scoped></style>
