import React from 'react'
import background from '../../../../images/stash-men.jpg'
import CreateIcon from '@material-ui/icons/Create'

function StorageItem({ itemImage, itemName, itemsInStore, itemPrice }) {
    let testId = itemImage + '' + Math.floor(Math.random() * 2000000)
    return (
        <div className='storageitem' load='lazy'>
            {/* <input type='checkbox' className='storageItem-checkbox' id={testId} />
            <label htmlFor={testId}></label> */}
            <div className='storageitem-container'>
                <div className='storageitem-overhall' for='testing'>
                    <div
                        className='storageitem-image'
                        style={{ backgroundImage: `url(${itemImage || background})` }}
                    ></div>
                    <div className='storageitem-info'>
                        <h3>{itemName || 'No Name Given'}</h3>
                        <span>
                            <h6>Items In Store:</h6>
                            <p>{itemsInStore || '0'}</p>
                        </span>
                        <span>
                            <h6>Product Price:</h6>
                            <p>${itemPrice || '0'}</p>
                        </span>
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
            <div className='storageitem-customizeIcon'>
                <CreateIcon />
            </div>
        </div>
    )
}

export default StorageItem
