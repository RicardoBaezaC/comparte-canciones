import React from 'react'
import './App.css';
import Header from './Header';
import MusicCards from './MusicCards';
import SwipeButtons from './SwipeButtons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddSong from './AddSong';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/add">
            <Header backButton="/"/>
            <AddSong/>
          </Route>
          <Route path="/">
            <Header/>
            <MusicCards/>
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
