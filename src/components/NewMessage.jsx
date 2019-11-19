import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewMessage(props) {
  let _message = null;
  let _forumId = null;
  let _type = null;

  function handleNewMessage(event){
    event.preventDefault();
    props.onNewPostCreation({message: _message.value, msgType: _type.value, forumId: _forumId.value, id: v4()});
    _message.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewMessage}>
        <textarea 
          type='text'
          placeholder='message'
          ref={(textarea) => { _message = textarea;}}
        />
        <input 
          type='text' 
          value={props.msgType} 
          ref={(input) => {_type = input;}}
          readOnly
          hidden />
        <input 
          type='text' 
          value={props.forumId} 
          ref={(input) => {_forumId = input;}}
          readOnly
          hidden />

        <button type='submit'>post</button>
      </form>
    </div>
  );
}

NewMessage.propTypes = {
  onNewPostCreation: PropTypes.func,
  msgType: PropTypes.string,
  forumId: PropTypes.string
};

export default NewMessage;