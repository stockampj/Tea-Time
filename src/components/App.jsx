import React from 'react';
import Header from './Header';
import {Route, Switch} from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import ForumPage from './ForumPage';

//class App extends React.Component {
function App() {
  //render(){
  let data = [
    {
      id: 1,
      name: 'Spilled Tea',
      posts: [
        {
          id: 10,
          msgContent: 'Nic Cage is terrible',
          comments: [
            {
              id: 20,
              msgContent: 'You\'re a terrible person. Your mom.',
              upCount: 4,
              downCount: 1
            },
            {
              id: 21,
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
      id: 2,
      name: 'What the Fox?!',
      posts: [
        {
          id: 30,
          msgContent: 'Unpopular opinion: millenials are alright',
          comments: [
            {
              id: 40,
              msgContent: 'Where have you been?! Really??',
              upCount: 134,
              downCount: 128
            },
            {
              id: 41,
              msgContent: 'For sure! OP is right. Be shook.',
              upCount: 123,
              downCount: 132
            }
          ],
          upCount: 23,
          downCount: 21
        },
        {
          id: 31,
          msgContent: '^^ Made me cry',
          comments: [
            {
              id: 50,
              msgContent: 'YES',
              upCount: 58,
              downCount: 72
            },
            {
              id: 51,
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
  ];
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={()=><ContentWrapper forums={data} /> } />
        <Route exact path='/forum/:id' render={()=><ForumPage forums={data} /> } />
      </Switch>
    </div>
  );
  // }
}

export default App;