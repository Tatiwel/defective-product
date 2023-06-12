import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import NavBar from "renderer/components/NavBar";

import logo_image from "../../public/images/Logo.png";
import mascote_image from "../../public/images/Mascote_Indicando.png";

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
    <div className="header">
      <Row>
        <NavBar title="Home" />
        <Col sm>
          <div className="background-image">
            <h1>This is a Home Page</h1>
            <img className="logo-image" src={logo_image} alt="logo-image" />
            <img
              className="mascot-image"
              src={mascote_image}
              alt="mascot-image"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
