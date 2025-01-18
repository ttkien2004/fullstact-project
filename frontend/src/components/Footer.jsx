import { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          marginTop: "auto",
          boxShadow: "0 4px 8px 4px rgba(0,0,0,0.1)",
          height: "80px",
          alignContent: "center",
          paddingLeft: "50px",
          fontWeight: "700",
        }}
      >
        🐧 All rights belong to me
      </div>
    );
  }
}

export default Footer;
