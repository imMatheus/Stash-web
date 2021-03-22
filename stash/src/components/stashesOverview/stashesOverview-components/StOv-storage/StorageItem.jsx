import React, { useState } from 'react'
// import background from '../../../../images/stash-men.jpg'
import background1 from '../../../../images/hm-blueHoodie.jpg'
import background2 from '../../../../images/hmgoepprod.jpeg'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

function StorageItem({ itemImage, itemName, itemsInStore, itemPrice }) {
    const [heartFilled, setHeartFilled] = useState(false)

    let testId = itemImage + '' + Math.floor(Math.random() * 2000000)

    itemImage = itemImage || background2
    itemName = itemName || 'Huvudtröja med tryck '
    itemsInStore = itemsInStore || Math.floor(Math.random() * 20 + 1)
    itemPrice = itemPrice || Math.floor(Math.random() * 100 + 100)

    //fill heart handler
    const fillHeartHandler = () => {
        //inverting the boolean that is the value of heartFilled
        setHeartFilled(!heartFilled)
    }

    // changing the background image on hover
    const toggleImageHoverHandler = (e) => {
        //reasigning the background to background1 or background2
        //depending on wich one its not at the moment
        e.target.style.backgroundImage =
            e.target.style.backgroundImage === 'url("' + background2 + '")'
                ? 'url("' + background1 + '")'
                : 'url("' + background2 + '")'
    }
    return (
        <div className='storageitem' load='lazy'>
            <div
                className={heartFilled ? 'hearticon hearticon-filledHeart' : 'hearticon'}
                onClick={fillHeartHandler}
            >
                {heartFilled ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </div>
            <div
                className='storageitem-image'
                onMouseEnter={toggleImageHoverHandler}
                onMouseLeave={toggleImageHoverHandler}
                style={{ backgroundImage: `url(${itemImage})` }}
            ></div>
            <div className='details'>
                <p className='name'>{itemName}</p>
                <div className='info'>
                    <span>{itemPrice}.20kr</span>
                    <span>{itemsInStore} in store</span>
                </div>
                <div className='colors'>
                    <div className='colors-circle'></div>
                    <div className='colors-circle'></div>
                    <div className='colors-circle'></div>
                    <div className='colors-circle'></div>
                    <span>+3</span>
                </div>
            </div>
        </div>
    )
}

export default StorageItem
