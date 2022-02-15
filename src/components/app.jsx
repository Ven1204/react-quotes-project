import React, { Component } from 'react';

import Headings from './headings';
import Menu from './menu';
import List from './list';
import Footer from './footer';

class App extends Component {
  state = {  }
  render() {
    return (
    <div className='container'>
      <Headings />
      <div className=''>
        <Menu className='col col-4'/>
        <List clasName='col col-8'/>
      </div>
      <Footer />
    </div>
    );
  }
}

export default App;
