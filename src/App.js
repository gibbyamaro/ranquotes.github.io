import React from 'react'
import { useEffect, useState } from "react";
import './App.css'

const App = () => {

  const [quote ,setQuote] = useState('');
  const [ author , setAuth ] = useState(''); 

  useEffect(() => {
    getQuote();
  },[]);
  
  const getQuote = () => {

    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch( url )
    .then( res => res.json() )
    .then( data => {
      let dataQuotes = data.quotes;
      let ranNum = Math.floor( Math.random() * dataQuotes.length );
      let ranQuote = dataQuotes[ ranNum ];
      setQuote(ranQuote.quote);
      setAuth( ranQuote.author )
      
    } ) 
  }

  const handleClick = () => {
    getQuote();
  }

  return (
      <div id="quoteBox">
        <div id="q">
          <p>"{quote}"</p>
        </div>
      <br/>
        <div id="a">
          <p>-{author}</p>
        </div>
        <div>
          <button onClick={handleClick} id="newQuote">New Quote</button>
        </div>
      </div>

  )

}

export default App;
