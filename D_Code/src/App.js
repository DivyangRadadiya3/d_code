import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

// Home Pages Import
import DigitalAgency from './pages/DigitalAgency';
import CreativeAgency from './pages/CreativeAgency';
import PersonalPortfolio from './pages/PersonalPortfolio';
import HomeStartup from './pages/HomeStartup';
import CorporateAgency from './pages/CorporateAgency';
import Contact from './pages/Contact';

// Service 
import ServiceTwo from './pages/ServiceTwo';

// Portfolio 
import ProjectGridOne from './pages/ProjectGridOne';

// About Us 
import AboutUs from './pages/AboutUs';

// Css Import
import './assets/scss/app.scss';


const App = () => {
  return (
    <Router>
		<ScrollToTop>
			<Routes>
				<Route path={process.env.PUBLIC_URL + "/"} element={<HomeStartup />}/>
				<Route path={process.env.PUBLIC_URL + "/digital-agency"} element={<DigitalAgency />}/>
				<Route path={process.env.PUBLIC_URL + "/creative-agency"} element={<CreativeAgency />}/>
				<Route path={process.env.PUBLIC_URL + "/personal-portfolio"} element={<PersonalPortfolio />}/>
				<Route path={process.env.PUBLIC_URL + "/home-startup"} element={<HomeStartup />}/>
				<Route path={process.env.PUBLIC_URL + "/corporate-agency"} element={<CorporateAgency />}/>
				<Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />}/>
				<Route path={process.env.PUBLIC_URL + "/service-two"} element={<ServiceTwo />}/>
				<Route path={process.env.PUBLIC_URL + "/ProjectGridOne"} element={<ProjectGridOne />}/>
				<Route path={process.env.PUBLIC_URL + "/AboutUs"} element={<AboutUs />}/>

			</Routes>
		</ScrollToTop>
    </Router>
  )
}

export default App;
