import { useEffect } from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { auth } = useAuthContext();
  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    console.log(auth);
  }, []);
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <h1>Workout Website</h1>
        </Link>
        <nav>
          {auth?.email ? (
            <div>
              <span>{auth.email}</span>
              <button onClick={() => handleLogout()}>Log out</button>
            </div>
          ) : (
            <div>
              <Link to="/LoginUser">Login</Link>
              <Link to="/SignupUser">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
