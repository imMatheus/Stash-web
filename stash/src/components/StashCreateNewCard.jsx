import React from 'react'

function StashCreateNewCard() {
    const addNewStashHandler = () => {
        alert('click')
    }
    return (
        <div className='stashcard' onClick={addNewStashHandler}>
            <div className='stashcard-CreateNew'>
                <div className='stashcard-Circle'>
                    <div></div>
                    <div></div>
                </div>
                <p>Create a new Stash</p>
            </div>
        </div>
    )
}

export default StashCreateNewCard
