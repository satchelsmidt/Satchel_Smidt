import React from 'react';
import AboutPage from "./components/pages/AboutPage"
import ContactPage from "./components/pages/ContactPage"
import ProjectPage from './components/pages/ProjectPage'
import ResumePage from './components/pages/ResumePage'
import NavBar from "./components/NavBar"
import Post from "./components/post"
import Footer from './components/Footer'

import { BrowserRouter, Route, Switch } from 'react-router-dom'



const App = () => {

  return (
    //Everything inside the BrowserRouter tag can now be routed via react router dom
    <BrowserRouter>
      <div className="App">
        <NavBar />
        {/* Using 'exact path' for a route ensures that it returns only routes that match this path exactly */}
        <Switch>
          <Route path='/about' component={AboutPage} />
          <Route path='/projects' component={ProjectPage} />
          <Route path='/resume' component={ResumePage} />
          <Route path='/contact' component={ContactPage}/>
          {/* This can be interpreted as our other route names as well, so we need to modify this somehow. We can use the 'Switch' tag here, matches only one route at a time */}
          <Route path="/:post_id" component={Post} />
        </Switch>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
