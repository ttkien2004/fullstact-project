import "./style.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import useLogout from "../hooks/useLogout";

const Header = () => {
  const [username, setUsername] = useState("");
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };
  useEffect(() => {
    if (user) {
      // console.log(user.username.split("@")[0]);
      setUsername(user.username.split("@")[0]);
    }
  }, [user]);

  return (
    <div
      style={{
        height: "100px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.05)",
      }}
    >
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "30px",
          marginLeft: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Blog
      </Link>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "100px",
        }}
      >
        {user ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            {
              <span style={{ fontWeight: "800", marginRight: "10px" }}>
                {username}
              </span>
            }
            <Button label="Đăng xuất" outlined onClick={handleLogout}></Button>
          </div>
        ) : (
          <div>
            <Link className="login-button" to={"/login"}>
              Đăng nhập
            </Link>
            <Link className="signup-button" to={"/signup"}>
              Đăng ký
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
