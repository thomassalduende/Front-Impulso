import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import  AppContext  from './context/AppContext.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AppContext.Provider>
            <App/>
        </AppContext.Provider>
    </BrowserRouter>
)
