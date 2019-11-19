import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import MessageWrapper from './MessageWrapper';

class ForumPage extends React.Component {
  
  render(){
    const { match } = this.props;
    console.log(this.props);
    console.log(match.params.id);
    const forum = this.props.forums.find(function(forum){
      if(forum.id.toString() === match.params.id){
        return forum;
      }
    });
    console.log(forum);
    return(
      <div>
        <p>he</p>
        <h4>{forum.name}</h4>
        {forum.posts.map((post)=> <MessageWrapper key={post.id} postContent={post}/>)}
      </div>
    );  
  }
}
ForumPage.propTypes = {
  forums: PropTypes.array,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
} 

const ForumPageWithRouter = withRouter(ForumPage);

export default ForumPageWithRouter;