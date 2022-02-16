import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props);
  }

  state = {  }
  render() {
    return (
      <div className='list-div'>
        <div className='card'>
          <h2>
            Title here...
          </h2>
          <p className='paragraph'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <br />
          <h4 className='author'>
            author
          </h4>
        </div>
          <br />

          <div className='butt-ons'>
            <button className='btn btn-primary ml-4'>
              previous
            </button>
            <button className='btn btn-warning ml-4'>
              random
            </button>
            <button className='btn btn-success ml-4'>
              next
            </button>
          </div>
      </div>
    );
  }
}

export default List;



const quotes = [
  {id: 1, quotes: 'We become what we think about', author: 'Earl Nightingale', reminder: 'A reminder that positive thinking helps you frame your mindset and change your life, spoken by the author of, “Essence of Success.'},
  {id: 2, quotes: 'People who are crazy enough to think they can change the world, are the ones who do.', author: 'Rob Siltanen', reminder: 'Rob is a leading creative marketer responsible for some of the most effective and iconic advertising campaigns of the past 30 years.'},
  {id: 3, quotes: 'Optimism is the one quality more associated with success and happiness than any other.', author: 'Brian Tracy', reminder: "Let your positivity and optimism inspire you and lead you to success. That's my favorite way to achieve success."},
  {id: 4, quotes: 'Happiness is not something readymade. It comes from your own actions.', author: 'Dalai Lama', reminder: 'A visionary among us, the Dalai Lama always has something inspiring to share'},
  {id: 5, quotes: 'All our dreams can come true if we have the courage to pursue them.', author: 'Walt Disney', reminder: "This inspirational quote comes from the man who created the happiest place on earth - and a multibillion-dollar empire."},
]
