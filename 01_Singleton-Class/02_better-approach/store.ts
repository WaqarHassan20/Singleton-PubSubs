interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

export class GameManager {
  games: Game[] = [];

  constructor() {
    this.games = [];
  }

  addMove(gameId: string, move: string) {
    const game = this.games.find((game) => game.id == gameId);
    game?.moves.push(move);
  }
  
  addGame(gameId: string) {
    const game = {
      id: gameId,
      whitePlayerName: "Alice",
      blackPlayerName: "Jordan",
      moves: [],
    };
    this.games.push(game);
  }

  logGames() {
    console.log(this.games);
  }
}

export const gameManagerObject = new GameManager();