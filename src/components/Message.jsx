import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {
  return(
    <div>
      {props.content}
    </div>
  );
}

Message.propTypes = {
  content: PropTypes.string
};
export default Message;