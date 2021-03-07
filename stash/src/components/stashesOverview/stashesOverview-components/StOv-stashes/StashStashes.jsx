import React from 'react'
import StashCard from '../../../StashCard'
import StashCreateNewCard from '../../../StashCreateNewCard'

function StashStashes() {
    return (
        <div className='stashesContainer'>
            <div className='currentStashes'>
                <StashCard /> <StashCard /> <StashCard /> <StashCard /> <StashCard />{' '}
                <StashCard />
                <StashCreateNewCard />
            </div>
        </div>
    )
}

export default StashStashes
