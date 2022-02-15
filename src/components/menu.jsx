import React, { Component } from 'react';

class Menu extends Component {
  state = {  }
  render() {
    return (
      <div className='menu-div'>
        <ul>
          <li>Inspirational Quotes</li>
          <li>Jokes</li>
          <li>Poems</li>
          <li>Bars</li>
          <li>Add your own</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
