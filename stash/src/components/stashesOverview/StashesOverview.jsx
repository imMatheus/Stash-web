import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import StashStorage from './stashesOverview-components/StOv-storage/StashStorage'

function StashesOverview() {
    return (
        <Router>
            <div className='stashesOverview'>
                <StashStorage />k
            </div>
        </Router>
    )
}

export default StashesOverview
