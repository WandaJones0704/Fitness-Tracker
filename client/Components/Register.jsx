import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { registerUser } from "../API/registerUser";
import { loginUser } from "../API/registerUser";

export function RegisterForm() {
  const { pathname } = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log("Result in Component: ", result);
    } catch (error) {
      setError(error);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const result = await loginUser(username, password);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleRegister}>
        {" "}
        <label>
          {" "}
          {pathname === "/register" ? (
            <h2>
              Do not have an account? Register or
              <Link to="/login"> Login</Link>
            </h2>
          ) : (
            <h2>
              <Link to="/register">Register</Link>
              Or Login
            </h2>
          )}
        </label>
        <label className="label" htmlFor="username">
          {" "}
          username:{" "}
        </label>
        <input
          value={username}
          required
          minLength={5}
          type="text"
          id="username"
          name="username"
          className="input"
          placeholder="Enter your username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label className="label" htmlFor="password">
          password:
        </label>
        <input
          required
          minLength={8}
          value={password}
          type="password"
          id="password"
          name="password"
          className="input"
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
