import React from 'react';
import PropTypes from 'prop-types';
import 'jquery/dist/jquery.min.js';

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

  function handleVoteClick(event){
    console.log(event);
    const elementValue = $(event).target.value;
    props.onVote({value: elementValue, forumId: props.forumId, messageId: props.postId, type: props.type, commentId: props.commentId })
  }
  console.log(props);
  return(
    <div style={messageStyle}>
      {props.content}
      <div className='voteBlock' style={voteBlockStyle}>
        <p className='voteItem' style={voteItem}>yays: {props.upCount}</p>
        <button id='up-vote' className='voteItem' style={voteItem} value='up'><i className="fas fa-thumbs-up"></i></button>
        <button id='down-vote' onClick={handleVoteClick()} className='voteItem' style={voteItem} value='down'><i className="fas fa-thumbs-down"></i></button>
        <p className='voteItem' style={voteItem}>boos: {props.downCount}</p>
      </div>
      <hr/>
    </div>
  );
}

Message.propTypes = {
  content: PropTypes.string,
  upCount: PropTypes.number,
  downCount: PropTypes.number,
  onVote: PropTypes.func,
  forumId: PropTypes.string,
  postId: PropTypes.string,
  type: PropTypes.string,
  commentId: PropTypes.string
};
export default Message;

        
{/* <i className="far fa-thumbs-up"></i>

        
<i className="far fa-thumbs-down"></i> */}