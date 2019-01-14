import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import axios from 'axios';

class App extends Component<{}, { isLoggedIn: any, name: any, password: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: false,
      name: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChange = (e: any) => {
    if (e.target.placeholder === 'Name') {
          this.setState({
            name: e.target.value
          });
    } else {
      this.setState({ password: e.target.value });
    }
  }

  handleLoginSubmit(e : any) {
    e.preventDefault();
    //name: Kamren
    //password: 33263
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      // console.log(res.data[4].username)
      // console.log(res.data[4].address.zipcode)
      if (this.state.name === res.data[4].username && 
          this.state.password === res.data[4].address.zipcode) {
            this.setState({ 
              isLoggedIn: true,
              name: '',
              password: ''            
            });
      } else {
        alert('Password or Username are wrong')
        this.setState({ 
          name: '',
          password: ''            
        });
      }
    });
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const loginCmp = <Login handleChange={this.handleChange} 
                            handleLoginSubmit={this.handleLoginSubmit}
                            name={this.state.name}
                            password={this.state.password}                            
                     />;
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar isLoggedIn={isLoggedIn}  handleLogout={this.handleLogout}/>
          <Route exact path='/' render={() => isLoggedIn ? <Home/> : loginCmp} />
          <Route path="/About" render={() => isLoggedIn ? <About/> : loginCmp} />
          <Route path="/contact" render={() => isLoggedIn ? <Contact/> : loginCmp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
