import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });

  const updatevalue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const signupHanddle = (e) => {
    e.preventDefault();
    if (userDetails.username && userDetails.password) {
      alert(
        `user name: ${userDetails.password}, and the password ${userDetails.username}`
      );
      setUserDetails({
        username: "",
        password: "",
        confirmpassword: "",
      });
    } else {
      alert(
        "All fields are mandatory to Sign up. Please fill username, password and Confirm password to continue"
      );
    }
  };
  return (
    <form className="loginForm" onSubmit={signupHanddle}>
      <h1 className="loginheader">Sign Up</h1>
      <div className="loginlablerow">
        <label>User Name</label>
      </div>
      <div className="loginlablerow">
        <input
          className="logininput"
          type="text"
          placeholder="User Name"
          name="username"
          id="username"
          value={userDetails.username}
          onChange={(e) => {
            updatevalue(e);
          }}
        ></input>
      </div>
      <div className="loginlablerow">
        <label>Password</label>
      </div>
      <div className="loginlablerow">
        <input
          className="logininput"
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={userDetails.password}
          onChange={(e) => {
            updatevalue(e);
          }}
        ></input>
      </div>
      <div className="loginlablerow">
        <label>Confirm Password</label>
      </div>
      <div className="loginlablerow">
        <input
          className="logininput"
          type="password"
          placeholder="Re-enter password"
          name="confirmpassword"
          id="confirmpassword"
          value={userDetails.confirmpassword}
          onChange={(e) => {
            updatevalue(e);
          }}
        ></input>
      </div>
      <div className="loginlablerow">
        <button type="submit" className="loginBtn">
          Sign up
        </button>
      </div>
      <div className="loginlablerow2">
        Already have an account ?<Link to="/login">Login</Link>
      </div>
    </form>
  );
}

export default SignUp;
