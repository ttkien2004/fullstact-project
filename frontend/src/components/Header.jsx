import { Link, useNavigate } from "react-router-dom";
import { Component } from "react";
import { Button } from "primereact/button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Chat app */}
      <h1 style={{ marginLeft: "50px" }}>Chat app</h1>
      <div
        style={{
          marginRight: "50px",
          alignContent: "center",
        }}
      >
        <Button
          label="Đăng nhập"
          outlined
          onClick={() => navigate("/login")}
          style={{ width: "150px", height: "50px", marginRight: "20px" }}
        ></Button>
        <Button
          label="Đăng ký"
          outlined
          onClick={() => navigate("/signup")}
          style={{ width: "150px", height: "50px" }}
        ></Button>
      </div>
    </div>
  );
};

export default Header;
