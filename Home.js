import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  
    return (
        <div style={styles.hero}>
          <div style={styles.container}>
            <h1 style={styles.heading}>🏏 Welcome to Web Cricket</h1>
            <p style={styles.text}> enjoy online Cricket!</p>
            <div style={styles.buttonContainer}>
              <button onClick={() => navigate("/register")} style={styles.registerButton}>Register</button>
              <button onClick={() => navigate("/login")} style={styles.loginButton}>Login</button>
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
        background: "linear-gradient(135deg,rgb(196, 228, 237),rgb(34, 63, 99))",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      },
      container: {
        textAlign: "center",
        padding: "30px",
        borderRadius: "15px",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        maxWidth: "400px",
      },
      heading: {
        fontSize: "26px",
        fontWeight: "bold",
        marginBottom: "10px",
      },
      text: {
        fontSize: "16px",
        marginBottom: "20px",
      },
      buttonContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
      },
      registerButton: {
        background: "#28a745",
        color: "#fff",
        padding: "12px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "0.3s",
      },
      loginButton: {
        background: "#ffc107",
        color: "#000",
        padding: "12px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "0.3s",
      },
    };

export default Home;
