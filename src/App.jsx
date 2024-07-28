import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Shop from "./pages/Shop";





const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
