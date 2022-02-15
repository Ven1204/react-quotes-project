import React, { Component } from 'react';

class List extends Component {
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
