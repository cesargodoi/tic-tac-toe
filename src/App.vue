<template>
  <!-- header -->
  <h1>Tic-Tac-Toe</h1>
  <!-- get players -->
  <get-players v-if="step === 'start'" @setPlayers="setPlayers" />
  <!-- game  -->
  <game-grid
    v-if="step === 'game' || step === 'whoWon'"
    :player="player"
    :winner="winner"
    :winSeq="winSeq"
    :reset="reset"
    @setItem="setItem"
  />
  <!-- who plays -->
  <h2 v-if="step === 'game'">{{ player === "X" ? playerX : playerO }}</h2>
  <!-- who won -->
  <div v-if="step === 'whoWon'" class="who-won">
    <h1 v-if="winner !== 'draw'">
      {{ winner }} <br />
      wins!
    </h1>
    <h1 v-else>It's a draw!</h1>
    <button class="btn" @click="restart">restart</button>
    <button class="btn" @click="quit">quit</button>
  </div>
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
      step: "start",
      player: "X",
      playerX: "",
      playerO: "",
      playerXShots: [],
      playerOShots: [],
      shots: 0,
      winner: "",
      winSeq: [],
      reset: false,
    };
  },
  watch: {
    winner() {
      this.step = "whoWon";
    },
    shots(value) {
      if (!this.winner && value === 9) {
        this.winner = "draw";
        this.step = 3;
      }
    },
  },
  methods: {
    setPlayers(playerX, playerO) {
      this.playerX = playerX ? playerX : "Player X";
      this.playerO = playerO ? playerO : "Player O";
      this.step = "game";
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
          this.winner = this.player === "X" ? this.playerX : this.playerO;
          this.winSeq = sequence;
          console.log(this.winner, this.winSeq);
          break;
        }
      }
    },
    restart() {
      this.winSeq = [];
      this.winner = "";
      this.playerXShots = [];
      this.playerOShots = [];
      this.shots = 0;
      this.reset = !this.reset;
      this.step = "game";
    },
    quit() {
      this.winSeq = [];
      this.winner = "";
      this.playerX = "";
      this.playerO = "";
      this.playerXShots = [];
      this.playerOShots = [];
      this.shots = 0;
      this.reset = !this.reset;
      this.step = "start";
    },
  },
};
</script>

<style>
.who-won {
  display: flex;
  flex-direction: column;
}
</style>
