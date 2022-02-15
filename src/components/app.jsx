import React, { Component } from 'react';

import Headings from './headings';
import Menu from './menu';
import List from './list';
import Footer from './footer';

class App extends Component {
  state = {  }
  render() {
    return (
    <div className='primary-container'>
      <Headings />
      <div className='secondary-container'>
        <Menu />
        <List />
      </div>
      <Footer />
    </div>
    );
  }
}

export default App;
