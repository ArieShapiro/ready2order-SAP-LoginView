import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";

class App extends Component<{}, { isLoggedIn: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }
  //Bind handleLoginForm function like in react docs

  handleLoginForm() {
    console.log('Handling form...')
  }

  handleLogout = () => {
    console.log('Loging out...')
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <BrowserRouter>
        <div className="App">
          {/* How you pass props to a component that is an attribute of a Route element? */}
          <Navbar isLoggedIn={isLoggedIn}  handleLogout={this.handleLogout}/>
          <Route path="/home" component={isLoggedIn ? Home : Login} />
          <Route path="/About" component={isLoggedIn ? About : Login} />
          <Route path="/contact" component={isLoggedIn ? Contact : Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
