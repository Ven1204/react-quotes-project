import React, { Component } from 'react';
import Click from './js-files/click';

class Menu extends Component {
  state = {  }
  render() {
    return (
      <div className='menu-div'>
        <div className='menu-1'>Inspirational Quotes</div>
        <div className='menu-2'>Jokes</div>
        <div className='menu-3'>Poetry</div>
        <div className='menu-4'>Bars</div>
        <div className='menu-5' onClick={Click}>Add your own</div>
      </div>
    );
  }
}

export default Menu;
