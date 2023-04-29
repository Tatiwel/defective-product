import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

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
      <h1>Home</h1>
      {/* <Button variant="primary" onClick={windowProduct}>
        Marco kk
      </Button> */}
      <Link to="/product">
        <Button variant="primary">Marco kkk</Button>
      </Link>
    </div>
  );
}

export default Home;
