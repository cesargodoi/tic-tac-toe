<template>
  <button
    :style="{ backgroundColor: winStyle(num) }"
    :disabled="setDisabled"
    @click="getItem(num)"
  >
    {{ item }}
  </button>
</template>

<script>
export default {
  props: {
    num: String,
    player: String,
    winner: String,
    winSeq: Array,
    reset: Boolean,
  },
  data() {
    return {
      item: "",
    };
  },
  watch: {
    reset() {
      this.item = "";
    },
  },
  computed: {
    setDisabled() {
      return this.item || this.winner ? true : false;
    },
  },
  methods: {
    getItem(num) {
      this.item = this.player;
      this.$emit("setItem", +num);
    },
    winStyle(num) {
      return this.winSeq.includes(+num) ? "#fff" : "";
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
  background-color: wheat;
}
</style>
