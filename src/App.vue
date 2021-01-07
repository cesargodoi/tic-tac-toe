<template>
  <!-- header -->
  <h1>Tic-Tac-Toe</h1>
  <!-- get players -->
  <get-players v-if="step === 1" @setPlayers="setPlayers" />
  <!-- game  -->
  <game-grid v-if="step === 2" :player="player" @setItem="setItem" />
</template>

<script>
import GameGrid from "./components/GameGrid.vue";
import "./css/global.css";

export default {
  components: { GameGrid },
  data() {
    return {
      step: 1,
      player: "X",
      playerX: "",
      playerO: "",
      playerXShots: [],
      playerOShots: [],
      shots: 0,
    };
  },
  methods: {
    setPlayers(playerX, playerO) {
      this.playerX = playerX ? playerX : "Player X";
      this.playerO = playerO ? playerO : "Player O";
      this.step = 2;
    },
    setItem(num) {
      if (this.player === "X") {
        this.playerXShots.push(num);
        this.shots++;
        this.player = "O";
      } else {
        this.playerOShots.push(num);
        this.shots++;
        this.player = "X";
      }
    },
  },
};
</script>

<style></style>
