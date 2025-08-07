import React, { useState, useRef } from "react";
import "../styles/PasswordGenerator.css";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [copied, setCopied] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) chars += "0123456789";
    if (charAllowed) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  const copyPasswordToClipboard = () => {
    passwordRef.current.select();
    document.execCommand("copy");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container">
      <h1 className="title">Password Generator</h1>

      <div className="input-group">
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          placeholder="Your Password"
        />
        <button
          onClick={copyPasswordToClipboard}
          className={`copy-btn ${copied ? "copied" : ""}`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="options">
        <div className="option">
          <input
            type="range"
            min={6}
            max={40}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Password Length: {length}</label>
        </div>

        <div className="option">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="number"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="number">Include Numbers</label>
        </div>

        <div className="option">
          <input
            type="checkbox"
            checked={charAllowed}
            id="characters"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characters">Include Special Characters</label>
        </div>
      </div>

      <button className="generate-btn" onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  );
}

export default PasswordGenerator;
