import React,{Component} from "react";

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './stylesheets/alignment.css';
import './stylesheets/custom.css';
import './stylesheets/form-element.css';
import './stylesheets/sizes.css';
import './stylesheets/themes.css';
import './stylesheets/hotelcard.css'
import './components/ProtectedRoute'
import ProtectedRoute from './components/ProtectedRoute';
import 'remixicon/fonts/remixicon.css';

import Profile from "./pages/Profile"


  

class App extends Component{
    render(){
        return(
            <div>
                <Router>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                </Routes>
                </Router>
            </div>
        )
    }
}

export default App;