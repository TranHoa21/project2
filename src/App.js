import React, { useState, useEffect } from "react";
import "./App.css";

const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  // Add more quotes as needed
];

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

function App() {
  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <div id="quote-box">
      <div id="text">{quote.text}</div>
      <div id="author">- {quote.author}</div>
      <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `"${quote.text}" - ${quote.author}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
}

export default App;
