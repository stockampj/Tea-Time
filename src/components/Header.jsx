import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

function Header(){
  var navbarStyle={
    backgroundColor: '#FFF8DC'    
  };
  var linkStyle={
    color: 'black'
  };
  var searchStyle = {
    float: 'right'
  };
  return(
    <div className='navbar' style= {navbarStyle}>
      <Link to='/' style={linkStyle}>Home</Link>
      <div style={searchStyle}>
        <Search />
      </div>
      <h1>Spill the Tea</h1>
    </div>
  );
}

export default Header;