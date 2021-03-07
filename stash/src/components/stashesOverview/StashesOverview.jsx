import React from 'react'
import Sidebar from './sidebar/Sidebar'
import StashStorage from './stashesOverview-components/StOv-storage/StashStorage'

function StashesOverview() {
    return (
        <div className='stashesOverview'>
            <Sidebar />
            <StashStorage />
        </div>
    )
}

export default StashesOverview
