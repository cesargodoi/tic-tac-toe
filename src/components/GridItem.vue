<template>
  <button @click="getItem">{{ item }}</button>
</template>

<script>
export default {
  props: { num: String, player: String },
  data() {
    return {
      item: "",
    };
  },
  methods: {
    getItem() {
      this.item = this.player === "X" ? "X" : "O";
      this.$emit("setItem", Number(this.num));
    },
  },
  emits: ["setItem"],
};
</script>

<style scoped>
button {
  margin: 0;
  width: 60px;
  height: 60px;
  border: 2px var(--text-color) solid;
  color: var(--text-color);
  font-size: 24pt;
  background-color: var(--background-color);
}
button:hover {
  opacity: 0.7;
}
</style>
