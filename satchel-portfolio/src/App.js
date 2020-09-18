import React from 'react';
import AboutPage from "./components/pages/AboutPage"
import ContactPage from "./components/pages/ContactPage"
import ProjectPage from './components/pages/ProjectPage'
import ResumePage from './components/pages/ResumePage'
import WorkPage from './components/pages/WorkPage.js'
import NavBar from "./components/NavBar"
import Footer from './components/Footer'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route path='/about' component={AboutPage} />
            {/* <Route path='/Satchel_Smidt/' component={AboutPage} /> */}
            <Route path='/projects' component={ProjectPage} />
            <Route path='/work' component={WorkPage} />
            <Route path='/resume' component={ResumePage} />
            <Route path='/contact' component={ContactPage} />
            <Route exact path="/Satchel_Smidt/">
              <Redirect to="/about" />
            </Route>
          </Switch>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
