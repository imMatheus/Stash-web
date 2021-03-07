import React from 'react'
import StashCard from '../../../StashCard'
import StashCreateNewCard from '../../../StashCreateNewCard'

function StashStashes() {
    let testImage =
        'https://images.unsplash.com/photo-1597106776019-b4ecc878c202?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    return (
        <div className='stashesContainer'>
            <div className='currentStashes'>
                <StashCreateNewCard />
                <StashCard stashImage={testImage} />
                <StashCard />
            </div>
        </div>
    )
}

export default StashStashes
