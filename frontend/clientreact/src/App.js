import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./routes";
import './Global.css';

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}