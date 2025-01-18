import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Component } from "react";

class DefaultLayout extends Component {
  state = {};
  render() {
    return (
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
}

export default DefaultLayout;
