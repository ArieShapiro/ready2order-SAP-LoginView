import React from 'react';

const Login = (props: any) => {
  console.log(props.myprop)
    return (
        <div className="container">
          <h4 className="center">Login</h4>
          <form action="">
            <input type="text" placeholder="Name" value={props.name}/>
            <input type="text" placeholder="Password" value={props.password}/>
            <input type="submit"/>
          </form>
        </div>
    )
}

export default Login;