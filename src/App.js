import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Headerbar from './components/headerbar.component';
import Footerbar from './components/footerbar.component';
import ScrollToTop from './components/scrollToTop';
import Home from './components/home.component';
import About from './components/about.component';
import Speakers from './components/speakers.component';
import Shedule from './components/shedule.component';
import Blog from './components/blog.component';
import Contact from './components/contact.component';

function App() {
  return (
    <Router>
      <ScrollToTop>
      
        <Headerbar/>
        
        <Route path='/' exact component={Home} />
        <Route path='/speakers' exact component={Speakers} />
        <Route path='/about' exact component={About} />
        <Route path='/shedule' exact component={Shedule} />
        <Route path='/blogs' exact component={Blog} />
        <Route path='/contact' exact component={Contact} /> 
        
        <Footerbar/>
     
      </ScrollToTop>
      </Router>
  );
}

export default App;
