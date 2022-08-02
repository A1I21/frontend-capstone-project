import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';

import { HomePage } from './pages/home';
import { SignupPage } from './pages/signup';
import { LandingPage } from './pages/landing';




import './styles/index.css';
import './styles/login.css';
import './styles/signup.css';




import { Profiles } from './pages/profile';

import './styles/navbar.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<>


		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/home' element={<LoginPage />} />
				<Route path='/sign-up' element={<LoginPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/profile' element={<LoginPage />} />
				<Route path='/company' element={<LoginPage />} />
			</Routes>
		</BrowserRouter>

	</>
);
