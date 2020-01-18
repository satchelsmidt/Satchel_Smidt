import React from 'react';
import Home from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"
import NavBar from "./components/NavBar"
import Post from "./components/post"

import { BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    //Everything inside the BrowserRouter tag can now be routed via react router dom
    <BrowserRouter>
      <div className="App">
        <NavBar />
        {/* Using 'exact path' for a route ensures that it returns only routes that match this path exactly */}
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path="/:post_id" component={Post}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
