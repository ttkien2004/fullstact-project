import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
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
        <Link className="login-button" to={"/login"}>
          Đăng nhập
        </Link>
        <Link className="signup-button" to={"/signup"}>
          Đăng ký
        </Link>
      </div>
    </div>
  );
};

export default Header;
