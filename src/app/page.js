"use client";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Home = () => {
  const [word, setWord] = useState("");
  const [wordMeanings, setWordMeanings] = useState([]);
  const [error, setError] = useState("");

  const fetchWordMeanings = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/?word=${word}`);
      if (!response.ok) {
        toast("No definitions found. Please try a different word.");
        return; // Exit early if the response is not OK
      }
      const data = await response.json();
      setWordMeanings((prevMeanings) => [
        ...prevMeanings,
        { word: data.word, meaning: data.meaning },
      ]);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = () => {
    if (word.trim() === "") {
      setError("Please enter a word to fetch its meaning.");
      return;
    }
    fetchWordMeanings();
  };

  return (
    <div className="home">
      <ToastContainer />
      <div className="container">
        <div className="meaningContainer">
          {error && <p className="error">{error}</p>}
          {wordMeanings.length > 0 &&
            wordMeanings.map((entry, index) => (
              <p key={index}>
                <strong>{entry.word}:</strong> {entry.meaning}
              </p>
            ))}
        </div>
        <div className="inputContainer">
          <Form.Control
            type="text"
            value={word}
            placeholder="The wise always reads.."
            onChange={(e) => setWord(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit();
                setWord("");
              }
            }}
          />
          <Button variant="dark" type="submit" onClick={handleSubmit}>
            Get Meaning
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
