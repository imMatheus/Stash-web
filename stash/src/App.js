import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks'
import StashesOverview from './components/stashesOverview/StashesOverview'
import './global.css'

function App() {
    useEffect(() => {
        console.log('hejjj')
    }, [])

    return (
        <div className='App'>
            <StashesOverview />
        </div>
    )
}

export default App
