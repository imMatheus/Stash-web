import React from 'react'

function LoadingSpinner() {
    return (
        <div className='loadingspinner'>
            <p>Stash</p>
            <div className='loadingspinner-spinner'>
                <div class='circle-line'></div>
                <div class='circle-line'></div>
                <div class='circle-line'></div>
                <div class='circle-line'></div>
                <div class='circle-line'></div>
            </div>
        </div>
    )
}

export default LoadingSpinner
