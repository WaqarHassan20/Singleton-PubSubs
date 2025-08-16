import { gameManagerObject } from "./store";

export function startLogger() {
  setInterval(() => {
    gameManagerObject.logGames();
  }, 5000);
}
