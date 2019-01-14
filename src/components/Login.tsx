import React from 'react';

function Login(props: any)  {
  // console.log(props.onChange)
    return (
        <div className="container">
          <h4 className="center">Login</h4>
          <form onSubmit={props.handleLoginSubmit}>
            <input type="text" placeholder="Name" value={props.name} onChange={props.handleChange}/>
            <input type="text" placeholder="Password" value={props.password} onChange={props.handleChange}/>
            <input type="submit" value="Login"/>
          </form>
        </div>
    )
}

export default Login;