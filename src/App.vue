<template>
  <!-- header -->
  <h1>Tic-Tac-Toe</h1>
  <!-- get players -->
  <get-players v-if="step === 1" @setPlayers="setPlayers" />
  <!-- game  -->
  <game-grid
    v-if="step === 2 || step === 3"
    :player="player"
    :winner="winner"
    :winSeq="winSeq"
    @setItem="setItem"
  />
  <!-- who plays -->
  <h2 v-if="step === 2">{{ player === "X" ? playerX : playerO }}</h2>
  <!-- who won -->
  <h1 v-if="step === 3">
    {{ winner === "X" ? playerX : playerO }} <br />
    Won!!!
  </h1>
</template>

<script>
import "./css/global.css";

const winnerSequencies = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

export default {
  data() {
    return {
      step: 1,
      player: "X",
      playerX: "",
      playerO: "",
      playerXShots: [],
      playerOShots: [],
      shots: 0,
      winner: null,
      winSeq: [],
    };
  },
  watch: {
    winner() {
      this.step = 3;
    },
    shots(value) {
      if (!this.winner && value === 9) {
        this.winner = "draw";
        this.step = 4;
      }
    },
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
        if (this.playerXShots.length >= 3) {
          this.checkWinner(this.playerXShots);
        }
        this.player = "O";
      } else {
        this.playerOShots.push(num);
        this.shots++;
        if (this.playerOShots.length >= 3) {
          this.checkWinner(this.playerOShots);
        }
        this.player = "X";
      }
    },
    checkWinner(list) {
      for (let sequence of winnerSequencies) {
        let tryToMatch = [];
        for (let item of list) {
          if (sequence.indexOf(item) >= 0) {
            tryToMatch.push(item);
          }
        }
        if (tryToMatch.length === 3) {
          this.winner = this.player;
          this.winSeq = sequence;
          break;
        }
      }
    },
  },
};
</script>

<style></style>
