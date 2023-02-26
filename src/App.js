import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Landing, Settings,Home, Register} from "./pages/index"

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<div>Error</div>} />
          </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;
