import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [voiceFrequency, setVoiceFrequency] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    // Register the user's voice frequency in the database
    // using a backend API
    fetch("/register", {
      method: "POST",
      body: JSON.stringify({ username, password, voiceFrequency }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMessage(data.message);
        } else {
          setErrorMessage(data.message);
        }
      });
  };

  const handleLogin = () => {
    // Retrieve the user's voice frequency from the database
    // using a backend API
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.authenticated) {
          setLoggedIn(true);
          setMessage("Logged in successfully!");
        } else {
          setMessage("Invalid credentials. Please try again.");
        }
      });
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setMessage("");
  };

  const handleVoiceInput = (event) => {
    const frequency = event.results[0][0].frequency;
    // Compare the current voice input frequency to the stored voice frequency
    // and authenticate the user if they match
    if (Math.abs(frequency - voiceFrequency) < 50) {
      setLoggedIn(true);
      setMessage("Logged in successfully!");
    } else {
      setMessage("Voice authentication failed. Please try again.");
    }
  };

  const handleVoiceError = (event) => {
    setErrorMessage(`Error occurred while capturing voice: ${event.error}`);
  };

  return (
    <>
      {loggedIn ? (
        <>
          <p>{message}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="voiceFrequency">Voice Frequency</label>
            <input
              id="voiceFrequency"
              type="text"
              value={voiceFrequency}
              onChange={(event) => setVoiceFrequency(event.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </>
      )}
    </>
  );
};

export default Login;
