import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import RenderRoutes from "./routes";

function App() {

  return (
    <div className="App">
      <Navbar />
      <RenderRoutes />
    </div>
  );
}

export default App;
