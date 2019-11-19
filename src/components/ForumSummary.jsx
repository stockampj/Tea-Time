import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Message from './Message';

function ForumSummary(props){
  const bestMsg = props.forumContent.posts.reduce(function(prev, curr){
    return (prev.upCount > curr.upCount) ? prev : curr;
  });

  var borderStyle = {
    border: '2px solid grey',
    borderRadius: '5px',
    margin: '5px',
    padding: '8px'
  }

  return(
    <div style={borderStyle}>
      <Link to={`/forums/${props.forumContent.id}`}><h4>{props.forumContent.name}</h4></Link>
      <Message content={bestMsg.msgContent}/>
    </div>
  );
}

ForumSummary.propTypes = {
  forumContent: PropTypes.object
};

export default ForumSummary;