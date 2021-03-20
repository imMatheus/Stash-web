import React, { useState } from 'react'
import background from '../../../../images/stash-men.jpg'
import CreateIcon from '@material-ui/icons/Create'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import FavoriteIcon from '@material-ui/icons/Favorite'

function StorageItem({ itemImage, itemName, itemsInStore, itemPrice }) {
    const [heartFilled, setHeartFilled] = useState(false)

    //fill heart handler
    const fillHeartHandler = () => {
        //inverting the boolean that is the value of heartFilled
        setHeartFilled(!heartFilled)
    }

    let testId = itemImage + '' + Math.floor(Math.random() * 2000000)
    itemImage = itemImage || background
    itemName = itemName || 'No Name Given'
    itemsInStore = itemsInStore || '13'
    itemPrice = itemPrice || Math.floor(Math.random() * 40)
    return (
        <div className='storageitem' load='lazy'>
            <div
                className={heartFilled ? 'hearticon hearticon-filledHeart' : 'hearticon'}
                onClick={fillHeartHandler}
            >
                <FavoriteIcon />
            </div>
        </div>
    )
}

export default StorageItem
