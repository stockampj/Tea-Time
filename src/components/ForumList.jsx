import React from 'react';
import PropTypes from 'prop-types';
import ForumSummary from './ForumSummary';

function ForumList(props){
  return(
    <div>
      {props.masterForumList.map(function(forum){
        return(
          <ForumSummary key={forum.id} forumContent={forum} />
        );
      })}
    </div>
  );
}

ForumList.propTypes = {
  masterForumList: PropTypes.array
};

export default ForumList;
