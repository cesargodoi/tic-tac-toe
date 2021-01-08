<template>
  <table border="0">
    <tr>
      <td colspan="2" class="header">Score</td>
    </tr>
    <tr :style="{ backgroundColor: xPlays }">
      <td>{{ playerX }}</td>
      <td style="text-align: end;">{{ playerXWins }}</td>
    </tr>
    <tr :style="{ backgroundColor: oPlays }">
      <td>{{ playerO }}</td>
      <td style="text-align: end;">{{ playerOWins }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "scoreboard",
  props: {
    player: String,
    playerX: String,
    playerO: String,
    playerXWins: Number,
    playerOWins: Number,
  },
  computed: {
    xPlays() {
      return this.player === "X" ? "#fff" : "";
    },
    oPlays() {
      return this.player === "O" ? "#fff" : "";
    },
  },
};
</script>

<style scoped>
table {
  border: none;
  border-collapse: collapse;
  width: 210px;
  padding: 4px;
  border-radius: 9px;
  background-color: #ebdcc9;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
}

td {
  padding: 7px 15px;
}

.header {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid;
}
</style>
