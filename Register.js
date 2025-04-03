import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ setUser }) {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();

    if (!nickname || !email || !phone || !username || !password) {
      alert("All fields are required!");
      return;
    }

    // if (phone<10) {
    //   alert("Enter a valid 10-digit phone number.");
    //   return;
    // }

    localStorage.setItem("user", username);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("password", password);
    
    setUser(username);
    navigate("/Login");
  }

  return (
    <div style={styles.hero}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Register</h2>
        <form onSubmit={handleRegister} style={styles.form}>
          <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} />
          <input type="text" placeholder="Enter Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} style={styles.input} />
          <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
          <input type="text" placeholder="Enter Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={styles.input} />
          <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
          <button type="submit" style={styles.button}>Register</button>
        </form>
        <p style={styles.text}>Already have an account? <a href="/login" style={styles.link}>Login</a></p>
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

export default Register;
