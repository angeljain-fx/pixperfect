import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './app.css';

import Header from './header/Header';
import Dashboard from './dashboard/Dashboard';
import NewProject from './projects/NewProject';
import Landing from './landing/Landing';
import PayPal from './PayPal/PayPal';

import ScrollToTop from './ScrollToTop';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render () {
    return (
      <div>
        <AnimatePresence>
          <BrowserRouter>
            <div>
              <ScrollToTop />
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/projects" component={Dashboard} onUpdate={() => window.scrollTo(0, 0)} />
              <Route exact path="/newProject" component={NewProject} />
              <Route exact path="/addCredits-PayPal" component={PayPal} />
            </div>
          </BrowserRouter>
      </AnimatePresence>
      </div>
    );
  }
}

export default connect(null, actions)(App);
