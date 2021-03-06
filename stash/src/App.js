import React from 'react'
import { Counter } from './features/counter/Counter'

import Sidebar from './components/sidebar/Sidebar'
import StashesOverview from './components/stashesOverview/StashesOverview'
import './global.css'

function App() {
    return (
        <div className='App'>
            <StashesOverview />
        </div>
    )
}

export default App
