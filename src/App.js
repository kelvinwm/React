import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import { HashRouter, Route, Switch, IndexRoute } from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="App">
            <Navbar />
            <br/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
            </Switch>
            <Footer/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
