"use client";
import React, { useContext } from "react";
import { WordContext } from "../utils/wordContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const WordInput = () => {
  const { word, setWord, handleSubmit, handleCopyClick } =
    useContext(WordContext);

  return (
    <div className="inputContainer">
      <Form.Control
        type="text"
        value={word}
        placeholder="The wise always reads..."
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
      <Button variant="light" type="button" onClick={handleCopyClick}>
        Copy All
      </Button>
    </div>
  );
};

export default WordInput;
