"use client";
import React, { createContext, useState } from "react";

export const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [word, setWord] = useState("");
  const [wordMeanings, setWordMeanings] = useState([]);
  const [error, setError] = useState("");
  // Function to fetch the meaning of the word from the python server
  const fetchWordMeaning = async () => {
    try {
      const response = await fetch(
        `https://bookplusmeaningbe.onrender.com/?word=${word}`
      );
      if (!response.ok) {
        throw new Error("No definitions found. Please try a different word.");
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
  // Function to handle the get meanings button click
  const handleSubmit = () => {
    if (word.trim() === "") {
      setError("Please enter a word to fetch its meaning.");
      return;
    }
    fetchWordMeaning();
  };
  // Function to handle the copy all button click
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(
        wordMeanings
          .map((entry) => `${entry.word}: ${entry.meaning}`)
          .join("\n")
      )
      .then(() => alert("Content copied to clipboard!"))
      .catch((err) => console.error("Error copying content: ", err));
  };

  return (
    <WordContext.Provider
      value={{
        word,
        setWord,
        wordMeanings,
        error,
        handleSubmit,
        handleCopyClick,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
