"use client";
import React, { useContext } from "react";
import { WordContext } from "../utils/wordContext";

const MeaningDisplay = () => {
  const { wordMeanings, error } = useContext(WordContext);

  return (
    <div className="meaningContainer">
      {error && <p className="error">{error}</p>}
      {wordMeanings.length > 0 &&
        wordMeanings.map((entry, index) => (
          <p key={index}>
            <strong>{entry.word}:</strong> {entry.meaning}
          </p>
        ))}
    </div>
  );
};

export default MeaningDisplay;
