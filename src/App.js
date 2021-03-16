import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';



export const PostContext =createContext([])

function App() {

  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setPosts(data))

  },[])

  return (
 <Router>
   
  <Switch>
  <PostContext.Provider value={posts}>
   <Route exact path="/">
      
          <Home>

          </Home>
       
    </Route>
    <Route path="/PostDetails/:id">
      <PostDetails></PostDetails>
    </Route>
    </PostContext.Provider>
    <Route path="/*">
      <NotFound></NotFound>
    </Route>
    </Switch>

   
 </Router>

    
  );
}

export default App;
