import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Headerbar from './components/headerbar.component';
import Footerbar from './components/footerbar.component';
import ScrollToTop from './components/scrollToTop';
import Home from './components/home.component';
import About from './components/about.component';
import Speakers from './components/speakers.component';
import Shedule from './components/shedule.component';
import Blog from './components/blog.component';
import Contact from './components/contact.component';
import Tickets from './components/ticket.component';
import GetTickets from './components/ticket-single.component';
import SingleBlog from './components/single-blog.component';
import ErrorPage from './components/errorpage';

function App() {
  return (
    <Router>
      <ScrollToTop>
      
        <Headerbar/>

        <Switch>
          
        <Route path='/' exact component={Home} />
        <Route path='/speakers' exact component={Speakers} />
        <Route path='/about' exact component={About} />
        <Route path='/shedule' exact component={Shedule} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/tickets' exact component={Tickets} /> 
        <Route path='/get-tickets' exact component={GetTickets} /> 
        <Route path='/blog/details' exact component={SingleBlog} />
        <Route component={ErrorPage} />

        </Switch>

        <Footerbar/>
     
      </ScrollToTop>
      </Router>
  );
}

export default App;
