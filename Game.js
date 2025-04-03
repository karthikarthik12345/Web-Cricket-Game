import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Game({ user }) {
  const [player1TotalScore, setPlayer1TotalScore] = useState(0);
  const [player1CurrentScore, setPlayer1CurrentScore] = useState(0);
  const [player2TotalScore, setPlayer2TotalScore] = useState(0);
  const [player2CurrentScore, setPlayer2CurrentScore] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  const runsArray = [0, 1, 2, 3, 4, 6];
  const navigate = useNavigate();

  function handleScore(player) {
    if (winner) return; 

    const score = runsArray[Math.floor(Math.random() * runsArray.length)];

    if (player === 1) {
      const newTotal = player1TotalScore + score;
      setPlayer1TotalScore(newTotal);
      setPlayer1CurrentScore(score);
      if (newTotal >= 20) {
        setWinner("Player 1");
        return;
      }
    } else {
      const newTotal = player2TotalScore + score;
      setPlayer2TotalScore(newTotal);
      setPlayer2CurrentScore(score);
      if (newTotal >= 20) {
        setWinner("Player 2");
        return;
      }
    }
    setCurrentPlayer(player === 1 ? 2 : 1);
  }

  function resetGame() {
    setPlayer1TotalScore(0);
    setPlayer1CurrentScore(0);
    setPlayer2TotalScore(0);
    setPlayer2CurrentScore(0);
    setCurrentPlayer(1);
    setWinner(null);
  }

  function handleLogout() {
    navigate("/login");
  }

  return (
    <div style={styles.hero}>
      <div style={styles.container}>
        <h1 style={styles.heading}>🏏 Welcome, {user}!</h1>
        <h2 style={styles.subheading}>Web Cricket</h2>
        {winner ? (
          <h2 style={styles.winnerText}wins>{winner} wins</h2>
        ) : (
          <h3 style={styles.currentPlayer}>Current Player: Player  {currentPlayer}</h3>
        )}

        <div style={styles.scoreBoard}>
          <h3 style={styles.playerScore}>Player 1: {player1TotalScore} <span style={styles.lastScore}>(Last Score: {player1CurrentScore})</span></h3>
          <h3 style={styles.playerScore}>Player 2: {player2TotalScore} <span style={styles.lastScore}>(Last Score: {player2CurrentScore})</span></h3>
        </div>

        <div style={styles.buttonContainer}>
          <button onClick={() => handleScore(1)} disabled={currentPlayer !== 1 || winner} style={styles.player1Button}>
            Player 1 
          </button>
          <button onClick={() => handleScore(2)} disabled={currentPlayer !== 2 || winner} style={styles.player2Button}>
            Player 2 
          </button>
        </div>

        <div style={styles.buttonContainer}>
          <button onClick={resetGame} style={styles.resetButton}>Reset Game</button>
          <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
        </div>
      </div>
    </div>
  );
}


const styles = {
  hero: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f5f5f5",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    textAlign: "center",
    padding: "30px",
    borderRadius: "8px",
    background: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  subheading: {
    fontSize: "18px",
    color: "#007BFF",
    marginBottom: "10px",
  },
  winnerText: {
    color: "#28a745",
    fontSize: "20px",
    fontWeight: "bold",
  },
  currentPlayer: {
    fontSize: "16px",
    color: "#6c757d",
    marginBottom: "15px",
  },
  scoreBoard: {
    marginBottom: "20px",
  },
  playerScore: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  lastScore: {
    fontSize: "14px",
    color: "#666",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  player1Button: {
    background: "#4a90e2", // Soft blue
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  },
  player2Button: {
    background: "#e57373", // Soft red
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  },
  resetButton: {
    background: "#f7c869", // Soft yellow
    color: "#333",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  },
  logoutButton: {
    background: "#a0a0a0",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  },
};


export default Game;
