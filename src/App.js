import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Landing} from "./pages/index"

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<div>Error</div>} />
          </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;
