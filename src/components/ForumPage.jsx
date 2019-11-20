import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import MessageWrapper from './MessageWrapper';
import NewMessage from './NewMessage';

class ForumPage extends React.Component {
  
  render(){
    const { match } = this.props;
    const forum = this.props.forums.find(function(forum){
      if(forum.id.toString() === match.params.id){
        return forum;
      }
    });

    return(
      <div>
        <h2>{forum.name}</h2>
        {forum.posts.map((post)=> <MessageWrapper key={post.id} postContent={post} onNewPostCreation={this.props.onNewPostCreation} forumId={match.params.id} onVote={this.props.onVote}/>)}
        <NewMessage onNewPostCreation={this.props.onNewPostCreation} msgType='post' forumId={forum.id}/>
      </div>
    );  
  }
}
ForumPage.propTypes = {
  forums: PropTypes.array,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  onNewPostCreation: PropTypes.func,
  onVote: PropTypes.func
}; 

const ForumPageWithRouter = withRouter(ForumPage);

export default ForumPageWithRouter;