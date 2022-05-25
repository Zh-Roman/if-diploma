import React from "react";
import "./styles/App.css";
import "./styles/fonts.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./modules/footer/Footer";
import Homepage from "./pages/Homepage";

const StyleMain = styled.main`
  flex: 1 1 auto;
`;

function App() {
  return (
    <Router>
      <StyleMain>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </StyleMain>
      <Footer />
    </Router>
  );
}

export default App;
