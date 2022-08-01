import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import { LoginPage } from './pages/login';
import { Profiles } from './pages/profile';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<>

		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				{/* <Route path="/home" element={<LoginPage />} />
				<Route path="/sign-up" element={<LoginPage />} />
				<Route path="/login" element={<LoginPage />} /> */}
				<Route path="/profile" element={<Profiles />} />
				{/* <Route path="/company" element={<LoginPage />} /> */}

			</Routes>
		</BrowserRouter>
	</>
);
