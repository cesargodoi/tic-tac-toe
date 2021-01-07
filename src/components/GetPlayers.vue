<template>
  <input type="text" placeholder="player X" v-model="playerX" />
  <input type="text" placeholder="player Y" v-model="playerO" />
  <button @click="getPlayers">Start Game</button>
</template>

<script>
export default {
  name: "get-player",
  emits: ["setPlayers"],
  data() {
    return {
      playerX: "",
      playerO: "",
    };
  },
  methods: {
    getPlayers() {
      this.$emit("setPlayers", this.playerX, this.playerO);
      this.playerX = "";
      this.playerO = "";
    },
  },
};
</script>

<style scoped>
input {
  border: 0;
  border-radius: 9px;
  width: 160px;
  margin: 5px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: var(--text-color);
}
</style>
