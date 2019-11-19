import React from 'react';

function Search(){
  var margin = {
    marginRight: '10px'
  };
  return (
    <div>
      <form>
        <input style={margin} type='text' placeholder='Search'></input>
        <button  className='btn btn-info' type='submit'>Search</button>
      </form>
    </div>
  );
}

export default Search;