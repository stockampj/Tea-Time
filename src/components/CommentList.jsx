import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import NewMessage from './NewMessage';

function CommentList(props){
  console.log(props);
  return (
    <div>
      {props.commentList.map((comment)=> 
        <Message content={comment.msgContent} key={comment.id}
          upCount= {comment.upCount}
          downCount= {comment.downCount}
        /> 

      )}
      <NewMessage onNewPostCreation={props.onNewCommentCreation} msgType='comment' forumId={props.forumId} messageId={props.postId}/>
    </div>
  );
}

CommentList.propTypes = {
  commentList: PropTypes.array,
  forumId: PropTypes.string,
  postId: PropTypes.string,
  onNewCommentCreation: PropTypes.func
};

export default CommentList;