import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // must put these in to use bootstrap
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Testimonials1 from './components/Testimonials1'; 
import Testimonials2 from './components/Testimonials2'; 
import Testimonials3 from './components/Testimonials3'; 
import './index.css';


ReactDOM.render(
  <Router>
    <Navbar className="bg-warning">
      <Link className="p-3" to="/">Testimonials1</Link>
      <Link className="p-3" to="/testimonials2">Testimonials2</Link>
      <Link className="p-3" to="/testimonials3">Testimonials3</Link>
    </Navbar>
    <Switch>
        <Route exact path="/" component={Testimonials1} />
        <Route path="/testimonials2" component={Testimonials2} />
        <Route path="/testimonials3" component={Testimonials3} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
