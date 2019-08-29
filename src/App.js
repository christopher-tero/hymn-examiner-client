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
const url = "http://localhost:3000/"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      resources: undefined,
      hymns: undefined,
    }
  }

  componentDidMount = () => {
    this.fetchData();
  }

  fetchData = () => {
    // this.setState({...this.state, isFetching: true})
    fetch(url + "resources")
      .then(response => response.json())
      .then(result => this.setState({resources: result}))
      .then(console.log(this.state.resources))
      .catch(error => console.error(error))
    fetch(url + "hymns")
      .then(response => response.json())
      .then(result => this.setState({hymns: result}))
      .catch(error => console.error(error))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch className="pages">
            <Route path="/home" exact component={Home} />
            <Route path="/hymns" exact component={this.state.resources ? (props) => <HymnList {...props}
              hymns={this.state.hymns} /> : ""
            } />
            <Route path="/hymns/:id" component={this.state.resources ? (props) => <HymnList {...props}
              hymns={this.state.hymns} /> : ""
            } />
            <Route path="/resources" component={this.state.resources ? (props) => <Resources {...props}
              resources={this.state.resources} /> : ""
            } />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
