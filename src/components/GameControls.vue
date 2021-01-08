<template>
  <button class="btn" v-if="step === 'whoWon'" @click="start">start</button>
  <button class="btn" v-if="step === 'game' || step === 'whoWon'" @click="quit">
    quit
  </button>
</template>

<script>
export default {
  name: "scoreboard",
  props: {
    step: String,
  },
  methods: {
    start() {
      this.$emit("start");
    },
    quit() {
      this.$emit("quit");
    },
  },
  emits: ["start", "quit"],
};
</script>

<style scoped></style>
