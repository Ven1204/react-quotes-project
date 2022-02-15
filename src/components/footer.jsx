import React, { Component } from 'react';

class Footer extends Component {
  state = {  }
  render() {
    return (
      <div className='footer-div'>
        <span className='pl-2 mr-4'>
          <i className="fa-brands fa-instagram-square" >|</i>
        </span>
        <span className='pl-2 mr-4'>
          <i className="fa-solid fa-rocket">|</i>
        </span>
        <span className='pl-2 mr-4'>
          <i className="fa-brands fa-linkedin"></i>
        </span>

      </div>
    );
  }
}

export default Footer;
