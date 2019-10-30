import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
// import HomePage from './pages/homepage/homepage.component';

const HomePage = (props) => {
  console.log(props)
  return (
  <div>
    <button onClick={() => props.history.push('/blog/asdqw/topics')} >Topics</button>
    <h1>HOME PAGE</h1>
  </div>
  );
}

const TopicList = props => {
  return (
  <div>
    <h1>TOPIC LIST PAGE</h1>
    <Link to={`${props.match.url}/13`} >to Topic 13</Link>
    <Link to={`${props.match.url}/11`} >to Topic 11</Link>
    <Link to={`${props.match.url}/14`} >to Topic 14</Link>
  </div>
  );
}

const TopicDetail = (props) => {
  console.log(props);
  return (
  <div>
    <h1>TOPIC DETAIL PAGE: {props.match.params.topicid}</h1>
  </div>
  );
}

function App() {
    return (
    <div className='App'>
      
        <Route exact path='/' component={HomePage} />
        <Route exact path='/blog/asdqw/topics' component={TopicList} />
        <Route path='/blog/asdqw/topics/:topicid' component={TopicDetail} />
        <Route exact path='/blog/topics' component={TopicList} />
        <Route path='/blog/topics/:topicid' component={TopicDetail} />
      
    </div>
    );
}

export default App;
