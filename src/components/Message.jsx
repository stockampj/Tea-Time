import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {
  var voteBlockStyle = {
    float: 'right'
  };
  var voteItem = {
    float: 'left'
  };
  var messageStyle = {
    minHeight: '50'
  };

  console.log(props);
  return(
    <div style={messageStyle}>
      {props.content}
      <div className='voteBlock' style={voteBlockStyle}>
        <p className='voteItem' style={voteItem}>yays: {props.upCount}</p>
        <button id='up-vote' className='voteItem' style={voteItem}><i className="fas fa-thumbs-up"></i></button>
        <button id='down-vote' className='voteItem' style={voteItem}><i className="fas fa-thumbs-down"></i></button>
        <p className='voteItem' style={voteItem}>boos: {props.downCount}</p>
      </div>





      <hr/>
    </div>
  );
}

Message.propTypes = {
  content: PropTypes.string,
  upCount: PropTypes.number,
  downCount: PropTypes.number
};
export default Message;

        
{/* <i className="far fa-thumbs-up"></i>

        
<i className="far fa-thumbs-down"></i> */}