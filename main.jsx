import React, { useEffect } from 'react';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Counters from './components/Counters';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/bootstrap.min.css';
import './styles/all.min.css';
import './styles/style.css';
import DailyInspiration from "./components/DailyInspiration";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);