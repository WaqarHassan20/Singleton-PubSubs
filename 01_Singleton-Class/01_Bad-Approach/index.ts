import { startLogger } from "./logger";
import { games } from "./store";

startLogger()

setInterval(() => {
    games.push({
      id: Math.random().toString(),
      whitePlayerName: "Alice",
      blackPlayerName: "Smith",
      moves: [],
    });
}, 4000);