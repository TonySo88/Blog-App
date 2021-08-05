import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import LoginForm from './components/register/LoginForm'
import SignUpForm from './components/register/SignUpForm'
import BlogForm from './components/blog/BlogForm'
import BlogEntry from './components/blog/BlogEntry'

import "./App.css";

function App() {

  // Some starter dummy data 
  const [entries, setEntries] = useState([
    {
      id: 1,
      title: "Worst Day EVER",
      date: "January 1, 2020",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 2,
      date: "January 2, 2020",
      title: "BEST DAY EVER",
      body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }
  ])

  const addEntry = newEntry => {
    setEntries([...entries, newEntry])
  }

  return (
    <Router>
      <div className="App">
          <Nav />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/blog-entry">
            <BlogForm addEntry={addEntry}/>
            {/* <BlogEntry entries={entries}/> */}
          </Route>
          <Route path="/feed">
            <BlogEntry entries={entries}/>
          </Route>
      </div>
    </Router>
  );
}

export default App;