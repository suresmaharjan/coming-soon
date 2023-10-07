import React from "react";
import HomePage from "./pages/homepage";
import ChatBot from "./pages/chatbot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="chatbot" element={<ChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
