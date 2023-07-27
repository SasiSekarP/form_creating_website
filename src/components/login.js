import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const valueUpdata = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const loginHandle = (e) => {
    e.preventDefault();
    if (userDetails.username && userDetails.password) {
      alert(
        `user name: ${userDetails.password}, and the password ${userDetails.username}`
      );
      setUserDetails({
        username: "",
        password: "",
      });
    } else {
      alert(
        "All fields are mandatory to Log in. Please fill both username and password to continue"
      );
    }
  };

  return (
    <form className="loginForm" onSubmit={loginHandle}>
      <h1 className="loginheader">Login</h1>
      <div className="loginlablerow">
        <label>User Name</label>
      </div>
      <div className="loginlablerow">
        <input
          className="logininput"
          placeholder="User Name"
          type="text"
          id="username"
          name="username"
          value={userDetails.username}
          onChange={(e) => {
            valueUpdata(e);
          }}
        ></input>
      </div>
      <div className="loginlablerow">
        <label>Password</label>
      </div>
      <div className="loginlablerow">
        <input
          className="logininput"
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          value={userDetails.password}
          onChange={(e) => {
            valueUpdata(e);
          }}
        ></input>
      </div>
      <div className="loginlablerow">
        <button type="submit" className="loginBtn">
          Log in
        </button>
      </div>
      <div className="loginlablerow2">
        Need to create an account? <Link to="/signup">Sign Up</Link>
      </div>
    </form>
  );
};

export default Login;
