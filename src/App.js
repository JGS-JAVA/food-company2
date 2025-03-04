import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Drinks from './pages/Drinks';
import Snacks from './pages/Snacks';
import Footer from './components/Footer';
import SnackDetail from "./components/SnackDetail";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/drinks" element={<Drinks/>}/>
                <Route path="/snacks" element={<Snacks/>}/>
                <Route path="/snacks/:id" element={<SnackDetail/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
