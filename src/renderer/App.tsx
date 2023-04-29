import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home/Home.jsx';
import Product from './pages/Product/Product.jsx';

// const { app, BrowserWindow } = require('electron');

// function createNewWindow() {
//   const newWindow = new BrowserWindow({
//     width: 400,
//     height: 300,
//     webPreferences: {
//       nodeIntegration: true
//     }
//   });

//   newWindow.loadURL(`file://${__dirname}/public/home.html`);
// }


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}
