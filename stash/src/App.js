import React from 'react'
import { Counter } from './features/counter/Counter'
import Navbar from './components/navbar/Navbar'

import Sidebar from './components/sidebar/Sidebar'
import './global.css'

function App() {
    return (
        <div className='App'>
            <Sidebar />
        </div>
    )
}

export default App
