import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import UserDataForm from "./UserDataForm";
import RichTextEditor from "./RichTextEditor";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <Router>
      <div>
        <nav style={navStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </li>
            <li style={liStyle}>
              <Link to="/userdata" style={linkStyle}>
                User Data Form
              </Link>
            </li>
            <li style={liStyle}>
              <Link to="/richtexteditor" style={linkStyle}>
                Rich Text Editor
              </Link>
            </li>
            <li style={liStyle}>
              <Link to="/dashboard" style={linkStyle}>
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/userdata" element={<UserDataForm />} />
          <Route path="/richtexteditor" element={<RichTextEditor />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

// Custom CSS styles
const navStyle = {
  backgroundColor: "#333",
  padding: "10px 0",
};

const ulStyle = {
  display: "flex",
  justifyContent: "center",
  listStyleType: "none",
  margin: 0,
  padding: 0,
};

const liStyle = {
  marginRight: "20px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "10px",
  transition: "color 0.3s ease",
  ":hover": {
    color: "#ff8c00",
  },
};

export default App;
