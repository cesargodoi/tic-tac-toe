<template>
  <!-- header -->
  <h1>Tic-Tac-Toe</h1>
  <!-- get players -->
  <get-players v-if="step === 1" @setPlayers="setPlayers" />
</template>

<script>
import "./css/global.css";
import GetPlayers from "./components/GetPlayers.vue";
export default {
  components: { GetPlayers },
  data() {
    return {
      step: 1,
      playerX: "",
      playerO: "",
    };
  },
  methods: {
    setPlayers(playerX, playerO) {
      this.playerX = playerX ? playerX : "Player X";
      this.playerO = playerO ? playerO : "Player O";
      this.step = 2;
    },
  },
};
</script>

<style></style>
