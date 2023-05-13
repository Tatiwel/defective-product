import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Supplier from "./pages/Supplier/Supplier";
import { BrowserWindow } from "electron/main";


// main.js
//const mainWindow = new BrowserWindow()

// In this example, only windows with the `about:blank` url will be created.
// All other urls will be blocked.
// mainWindow.webContents.setWindowOpenHandler(({ url }) => {
//   if (url === '/product') {
//     return {
//       action: 'allow',
//       overrideBrowserWindowOptions: {
//         frame: false,
//         fullscreenable: false,
//         backgroundColor: 'black',
//         webPreferences: {
//           preload: 'my-child-window-preload-script.js'
//         }
//       }
//     }
//   }
//   return { action: 'deny' }
// })

//window.open('https://github.com', '_blank', 'top=500,left=200,frame=false,nodeIntegration=no')
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
        <Route path="/supplier" element={<Supplier />} />
			</Routes>
		</Router>
	);
}
