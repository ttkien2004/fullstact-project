import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

export default function Navbar() {
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <h1>Workout Website</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleLogout}>Log out</button>
          </div>
          <div>
            <Link to="/LoginUser">Login</Link>
            <Link to="/SignupUser">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
