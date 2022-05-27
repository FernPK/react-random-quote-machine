import './App.css';
import quotes from './data.js';
import React from 'react';

function getRandomInt() {
  return Math.floor(Math.random() * quotes.length);
}

class QuoteBox extends React.Component {
  constructor(props){
    super(props);
    this.randomQuote = this.randomQuote.bind(this);
    this.state = {
      index: 0
    }
  }
  randomQuote() {
    let randomInt = getRandomInt();
    this.setState({
      index: randomInt
    });
  }
  render() {
    return (
      <div>
        <div id='background-deco'>
          <p>Random Quote Machine</p>
        </div>
        <div id='quote-box'>
          <h4 id='text'>{quotes[this.state.index].quote}</h4>
          <h5 id='author'>{quotes[this.state.index].author}</h5>
          <div id='bottom'>
            <a href='twitter.com/intent/tweet' target='_blank' id='tweet-quote'><button><i class="fa-brands fa-twitter"></i></button></a>
            <button id='new-quote' onClick={this.randomQuote}>New quote</button>
          </div>
        </div>
        <p className='footer-text'>quotes from <a href='https://gist.github.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80' target='_blank'>nasrulhazim</a></p>
        <p className='footer-text' id='creator'>by fernfofy</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;
