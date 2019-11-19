import React from 'react';
import PropTypes from 'prop-types';
import ForumList from './ForumList';

function ContentWrapper(props){
  return(
    <div>
      <ForumList masterForumList={props.forums}/>
    </div>
  );
}

ContentWrapper.propTypes = {
  forums: PropTypes.array
};

export default ContentWrapper;