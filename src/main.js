import { createApp } from "vue";
import App from "./App.vue";

import GetPlayers from "./components/GetPlayers.vue";
import GameGrid from "./components/GameGrid.vue";

const app = createApp(App);

app.component("get-players", GetPlayers);
app.component("game-grid", GameGrid);

app.mount("#app");
