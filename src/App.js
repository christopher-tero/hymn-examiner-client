import React, {Component} from 'react';
import Home from './Components/Home/Home'
import HymnList from './Components/HymnList/HymnList'
import HymnPage from './Components/HymnPage/HymnPage'
import Resources from './Components/Resources/Resources'
import About from './Components/About/About'
import Header from './Components/Header/Header'
import Hymn from './Components/HymnList/Hymn'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch className="pages">
            <Route path="/home" exact component={Home} />
            <Route path="/hymns" exact component={HymnList} />
            <Route path="/hymns/:id" component={Hymn} />
            <Route path="/resources" component={Resources} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
