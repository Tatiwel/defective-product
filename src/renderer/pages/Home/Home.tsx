import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import NavBar from "renderer/components/NavBar";

// const windowProduct = async () => {
//   const remote = require('electron').remote;
//   const BrowserWindow = remote.BrowserWindow;
//   const win = new BrowserWindow({
//     height: 600,
//     width: 800,
//     frame: false,
//     webPreferences: {
//       nodeIntegration: true,
//     },
//   });
//   win.loadURL(`file://${__dirname}/app.html#/product`);
// };

function Home() {
  return (

    <div>
      <NavBar title="Home" />
      <div className="background-image">
        <div className="mascot-image">
        </div>
        <h1>This is a Home Page</h1>
      </div>
    </div>
  );
}

export default Home;
