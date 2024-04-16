import React from 'react';
import './App.css';

class QuoteMachine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quote:'',
      author:''
    };
    this.generateQuote = this.generateQuote.bind(this);
  }

  componentDidMount(){
    this.generateQuote();
  }

  generateQuote(){
    fetch('https://api.quotable.io/random').then(response => response.json()).then(data =>{
      this.setState({
        quote:data.content,
        author:data.author
      })
    })
  }

  render(){

    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${this.state.quote}" - ${this.state.author}`)}`;
    return(
      <div id="quote-box">
        <span id="text">{this.state.quote}</span>
        <h4 id="author">{this.state.author}</h4>
        <button id="new-quote" onClick={this.generateQuote}>New Quote</button>
        <a id="tweet-quote" href={tweetUrl} target="_blank" rel="noopener noreferrer">Tweet Quote</a>
      </div>
    );
  }
}

export default QuoteMachine;