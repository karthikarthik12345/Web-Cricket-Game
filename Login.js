import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const storedUser = localStorage.getItem("user");
    const storedPass = localStorage.getItem("password");

    if (username === storedUser && password === storedPass) {
      setUser(username);
      navigate("/game");
    } else {
       alert("Invalid username or password. redirecting to home...");
        navigate("/");
    }
  }

  return (
    <div style={styles.hero}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} />
          <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.text}>Don't have an account? <a href="/" style={styles.link}>Register</a></p>
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
    backgroundColor: "#f0f8ff",
  },
  container: {
    textAlign: "center",
    padding: "50px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "350px",
  },
  heading: {
    color: "green",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "lightblue",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
  text: {
    marginTop: "10px",
  },
  link: {
    color: "blue",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Login;
