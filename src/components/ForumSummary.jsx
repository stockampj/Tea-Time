import React from 'react';
import Link from 'react-router-dom';
import PropTypes from 'prop-types';

function ForumSummary(props){
  const bestMsg = props.forum.posts.reduce(function(prev, curr){
      return (prev.upCount > curr.upCount) ? prev : curr
    });
  
  return(
    <div>
      <Link to={`/forums/${props.forum.id}`}><h4>{props.forum.name}</h4></Link>
      <Message content={bestMsg.msgContent}/>
    </div>
  )
}

ForumSummary.propTypes = {
  forum: PropTypes.object
}

export default ForumSummary;