import React from 'react'
import background from '../images/stash-men.jpg'

function StashCard() {
    return (
        <div className='stashcard'>
            <div
                className='stashcard-image'
                style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className='stashcard-info'>
                <div className='stashcard-header'>My store</div>
                <p>
                    Items in store: <span>230</span>
                </p>
                <p>
                    Current Value: <span>230</span>
                </p>
                <p>
                    Something: <span>230</span>
                </p>
                <p>
                    Something two: <span>230</span>
                </p>
            </div>
        </div>
    )
}

export default StashCard
