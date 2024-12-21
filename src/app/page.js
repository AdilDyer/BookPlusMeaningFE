"use client";
import React from "react";
//Context to manage the state of the word and its meanings which includes "word": input word, "setWord", "wordMeanings": array, "error" : on failing to fetch a result(due to error and not non-availability of meaning), "handleSubmit":to push fetching req from server; where the response includes the given word and its meaning if available, else an error which could be shown in the error component above the menu(in case of failed to fethc) or displayed as a toast( in case of non-availability of meaning), "handleCopyClick": to copy the meanings to the clipboard
import { WordProvider } from "./utils/wordContext";
//Component to display the meanings of the words entered by the user in a list form above the input div
import MeaningDisplay from "./components/MeaningDisplay";
//Component To get the word input from the user
import WordInput from "./components/WordInput";
//To show the error when the word is not found and to show the success message when the content is copied to the clipboard
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/*
Homepage where user will enter a word to get its meaning and the meaning will be displayed in a list form above the input field.
Then the user can keep asking for more words and their meanings will be keep appending in that list
When the user is finished, they can copy all the meanings to the clipboard and paste it wherever they want, it would be in the line by line format with word and its meaning separated by a colon and words highlighted in bold.
*/
const Home = () => {
  return (
    <WordProvider>
      <div className="home">
        <ToastContainer />
        <div className="container">
          <MeaningDisplay />
          <WordInput />
        </div>
      </div>
    </WordProvider>
  );
};

export default Home;
