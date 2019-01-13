import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";

class App extends Component<{}, { isLoggedIn: any, nameValue: any, passwordValue: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: false,
      nameValue: '',
      passwordValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChange(e: any) {
    if (e.target.placeholder==='Name') {
           console.log('gugi!!!!!!!!!!!!')
    } else {

    }
    // this.setState({value: event.target.value});
  }

  handleForm() {
    console.log('Handling form...')
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const loginCmp = <Login onChange={this.handleChange} handleForm={this.handleForm} />;
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar isLoggedIn={isLoggedIn}  handleLogout={this.handleLogout}/>
          <Route path='/home' render={() => isLoggedIn ? <Home/> : loginCmp} />
          <Route path="/About" render={() => isLoggedIn ? <About/> : loginCmp} />
          <Route path="/contact" render={() => isLoggedIn ? <Contact/> : loginCmp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
