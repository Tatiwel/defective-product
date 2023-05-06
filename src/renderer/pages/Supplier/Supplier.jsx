import React, { useState } from 'react';
import Navbar from

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  function handleNavbarItemClick(itemName) {
    setCurrentPage(itemName);
  }

  return (
    <div className="App">
      <NavigationBar onItemClick={handleNavbarItemClick} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact />}
    </div>
  );
}

export default App;
