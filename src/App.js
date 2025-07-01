// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./components/Dashboard";
// import ContextProvider from './components/ContextProvider';
// import ProductProvider from './components/ProductProvider';
// import ReactDOM from 'react-dom';
// import { AuthContext } from './components/AuthContext';
import "./App.css";

// ReactDOM.render(
//         <React.StrictMode>
//             <ContextProvider>
//               <ProductProvider>
//                  <App />
//               </ProductProvider>
//             </ContextProvider>
//         </React.StrictMode>,

//       document.getElementById('root') );

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
