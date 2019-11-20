import React from 'react';
import Header from './Header';
import {Route, Switch} from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import ForumPage from './ForumPage';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleAddingNewPosttoForum = this.handleAddingNewPosttoForum.bind(this);
    this.handleVote = this.handleVote.bind(this);
    this.state = { 
      data: [
        {
          id: '1',
          name: 'Spilled Tea',
          posts: [
            {
              id: '10',
              msgContent: 'Nic Cage is terrible',
              comments: [
                {
                  id: '20',
                  msgContent: 'You\'re a terrible person. Your mom.',
                  upCount: 4,
                  downCount: 1
                },
                {
                  id: '21',
                  msgContent: 'Sic Burn!',
                  upCount: 72,
                  downCount: 21
                }
              ],
              upCount: 0,
              downCount: 6
            }
          ]
        },
        {
          id: '2',
          name: 'What the Fox?!',
          posts: [
            {
              id: '30',
              msgContent: 'Unpopular opinion: millenials are alright',
              comments: [
                {
                  id: '40',
                  msgContent: 'Where have you been?! Really??',
                  upCount: 134,
                  downCount: 128
                },
                {
                  id: '41',
                  msgContent: 'For sure! OP is right. Be shook.',
                  upCount: 123,
                  downCount: 132
                }
              ],
              upCount: 23,
              downCount: 21
            },
            {
              id: '31',
              msgContent: '^^ Made me cry',
              comments: [
                {
                  id: '50',
                  msgContent: 'YES',
                  upCount: 58,
                  downCount: 72
                },
                {
                  id: '51',
                  msgContent: 'Nah man. They\'re super cool',
                  upCount: 3,
                  downCount: 23
                }
              ],
              upCount: 42,
              downCount: 18
            }
          ]
        }
      ]
    };
  }

  handleAddingNewPosttoForum(newMessage){
    const forum = this.state.data.find((forum) => forum.id === newMessage.forumId);
    const type = newMessage.msgType;
    const updatedData = this.state.data.filter((forum) => forum.id !== newMessage.forumId);
    if(type === 'post'){
      var postsString = JSON.stringify(forum.posts);
      var newPostsArray = JSON.parse(postsString);
      newPostsArray.push({id: newMessage.id, msgContent: newMessage.message, comments: [], upCount: 0, downCount: 0});
      forum.posts = newPostsArray;
    }
    else {
      const post = forum.posts.find((post) => post.id === newMessage.messageId);
      var commentsString = JSON.stringify(post.comments);
      var newCommentsArray = JSON.parse(commentsString);
      newCommentsArray.push({id: newMessage.id, msgContent: newMessage.message, upCount: 0, downCount: 0})
      post.comments = newCommentsArray;
      console.log(post.comments);
    }
    updatedData.push(forum);
    this.setState({data: updatedData });
  }

  handleVote(vote){
    const forum = this.state.data.find((forum) => forum.id === vote.forumId);
    const post = forum.posts.find((post) => post.id === vote.messageId);
    const type = vote.voteType;
    const updatedData = this.state.data.filter((forum) => forum.id !== newMessage.forumId);
    let voteItem = post;

    if(type !== 'post'){
      const comment = post.comments.find((comment) => comment.id === vote.commentId);
      voteItem = comment;
    }

    if(vote.value === 'up'){
      voteItem.upCount++;
    } else {
      voteItem.downCount++;
    }
    updatedData.push(forum);
    this.setState({data: updatedData });
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><ContentWrapper forums={this.state.data} /> } />
          <Route exact path='/forum/:id' render={()=><ForumPage forums={this.state.data} onNewPostCreation={this.handleAddingNewPosttoForum} onVote={this.handleVote}/> } />
        </Switch>
      </div>
    );
  }
}

export default App;