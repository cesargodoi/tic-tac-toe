import { createApp } from "vue";
import App from "./App.vue";

import GetPlayers from "./components/GetPlayers.vue";
import GameGrid from "./components/GameGrid.vue";
import Scoreboard from "./components/Scoreboard.vue";
import GameControls from "./components/GameControls.vue";

const app = createApp(App);

app.component("get-players", GetPlayers);
app.component("game-grid", GameGrid);
app.component("scoreboard", Scoreboard);
app.component("game-controls", GameControls);

app.mount("#app");
