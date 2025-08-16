// Define an interface "Game" to represent the structure of a chess game
interface Game {
  id: string;               // Unique ID for each game
  whitePlayerName: string;  // Name of the white player
  blackPlayerName: string;  // Name of the black player
  moves: string[];          // List of moves made in the game
}

export class GameManager {
  // A static property that will hold the single instance of GameManager
  private static instance: GameManager;

  // Array to store all the chess games managed by this GameManager
  games: Game[] = [];
  
  // Private constructor ensures that the class cannot be instantiated
  // directly using 'new'. Only this class itself can create an instance.
  private constructor() {
    this.games = []; // Initialize the games array as empty
  }

  // Static method to get the single instance of GameManager (Singleton Pattern)
  static getInstance() {
    // If an instance already exists, return it
    if (GameManager.instance) {
        return GameManager.instance;
    } 
    else {
        // If not, create a new instance and store it in the static property
        GameManager.instance = new GameManager();
        return GameManager.instance;
    }
  }

  // Method to add a new move to an existing game by its gameId
  addMove(gameId: string, move: string) {
    // Find the game object from the games array that matches the given gameId
    const game = this.games.find((game) => game.id == gameId);

    // If the game exists, push the new move into its moves array
    game?.moves.push(move);
  }

  // Method to add a new game into the games array
  addGame(gameId: string) {
    // Create a new game object with default player names and empty moves
    const game = {
      id: gameId,
      whitePlayerName: "Alice",   // Default white player
      blackPlayerName: "Jordan",  // Default black player
      moves: [],                  // Initially no moves
    };

    // Push the new game into the games array
    this.games.push(game);
  }

  // Method to log all games to the console for debugging/inspection
  logGames() {
    console.log(this.games);
  }
}

// export const games: Game[] = []
// // Instead of using the in-memory array on which we don't have a lot of control like mutation. 
// We will create a class to manage the game state, which is called as singleton pattern.
// In singleton pattern, we ensure that a class has only one instance and provide a global point of access to it.

// 📌 Explanation Paragraph
// The Singleton pattern in this GameManager class ensures that only one instance of GameManager exists across the entire application. By making the constructor private, no other part of the code can directly create a new instance of GameManager. Instead, the static getInstance() method checks if an instance already exists; if it does, it returns the same one, otherwise, it creates a new instance. This guarantees that all parts of the program share the same games array and state, making it ideal for managing global resources such as active chess games.