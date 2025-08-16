import { startLogger } from "./logger";
import { gameManagerObject } from "./store";

startLogger()


setInterval(() => {
    gameManagerObject.addGame(Math.random().toString());
}, 5000);