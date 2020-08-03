import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import image from "./amazon.png";
import { auth } from "../firebase";

function Login() {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        // logged  in
        history.push("/");
      })
      .catch(e => console.log(e.message));
  };

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // do the registes
        history.push("/");
      })
      .catch(e => console.log(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={image} alt="" />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login_sign">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login_register">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
