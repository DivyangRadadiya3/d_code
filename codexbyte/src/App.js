import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeStartup from './pages/HomeStartup';
import Contact from './pages/Contact';
import ServiceTwo from './pages/ServiceTwo';
import ServiceDetails from './pages/ServiceDetails';
import ProjectGridOne from './pages/ProjectGridOne';
import AboutUs from './pages/AboutUs';







import './assets/scss/app.scss';


const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>

          <Route path={process.env.PUBLIC_URL + "/"} element={<HomeStartup />} />
          <Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />} />
          <Route path={process.env.PUBLIC_URL + "/service"} element={<ServiceTwo />} />
          <Route path={process.env.PUBLIC_URL + "/service-details/:slug"} element={<ServiceDetails />} />
          <Route path={process.env.PUBLIC_URL + "/project-grid-one"} element={<ProjectGridOne />} />
          <Route path={process.env.PUBLIC_URL + "/about-us"} element={<AboutUs />} />






        </Routes>
      </ScrollToTop>

    </Router>
  )
}
export default App;
