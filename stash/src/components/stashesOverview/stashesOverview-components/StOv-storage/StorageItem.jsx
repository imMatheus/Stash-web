import React from 'react'
import background from '../../../../images/stash-men.jpg'

function StorageItem({ itemImage, itemName, itemsInStore, itemPrice }) {
    let testId = itemImage + ''
    return (
        <div className='storageitem' load='lazy'>
            <input type='checkbox' id={testId} />
            <label htmlFor={testId}>h</label>
            <div className='storageitem-conatiner'>
                <div className='storageitem-overhall' for='testing'>
                    <div
                        className='storageitem-image'
                        style={{ backgroundImage: `url(${itemImage || background})` }}
                    ></div>
                    <div className='storageitem-info'>
                        <div>
                            <h6>Product Name:</h6>
                            <h3>{itemName || 'No Name Given'}</h3>
                        </div>
                        <div>
                            <h6>Items In Store:</h6>
                            <p>{itemsInStore || '0'}</p>
                        </div>
                        <div>
                            <h6>Product Price:</h6>
                            <p>${itemPrice || '0'}</p>
                        </div>
                    </div>
                </div>
                {/* a drop down menu for a more detailed status of the product */}
                <div className='storageitem-dropdown'>
                    <div
                        className='storageitem-dropdown-image'
                        style={{ backgroundImage: `url(${itemImage || background})` }}
                    ></div>
                    <div className='storageitem-dropdown-info'></div>
                </div>
            </div>
        </div>
    )
}

export default StorageItem
