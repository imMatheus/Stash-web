import React from 'react'

function StorageItem({ itemImage }) {
    let selectedImage = itemImage
    return (
        <div class='storageitem'>
            <div
                className='storageitem-image'
                style={{ backgroundImage: `url(${selectedImage})` }}
            ></div>
        </div>
    )
}

export default StorageItem
