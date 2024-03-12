import React, {useState, useEffect} from "react";
import './App.css';

const QuoteGenerator=()=>{
const [quote, setQuote]= useState('');

const fetchQuote=()=>{
  fetch('https://api.quotable.io/random')
  .then(response=>response.json())
  .then(data=>{
    setQuote(data.content);
  })
  .catch(error=>console.error('Error fetching the quote: ', error));
};
useEffect(()=>{
  fetchQuote()
}, []);

  return(
    <div className="quote-container">
      <h1>Welcome to Random Quote Generator</h1>
      <blockquote>
        {quote && <p>"{quote}</p>}
      </blockquote>
      <button onClick={fetchQuote} className="text">Generate a Quote</button>
    </div>
    );
};
export default QuoteGenerator;