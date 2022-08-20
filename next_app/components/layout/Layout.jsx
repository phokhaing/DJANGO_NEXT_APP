// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Topbar from "./Topbar";

import Footer from "./Footer";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <>
      <div id="wrapper">
        <Topbar />
        <Leftbar />

        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
              {/* <Dashboard /> */}
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <Rightbar />
    </>
  );
}
