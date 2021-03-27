import React, { useState } from 'react'
// import background from '../../../../images/stash-men.jpg'
import background1 from '../../../../images/hm-blueHoodie.jpg'
import background2 from '../../../../images/hmgoepprod.jpeg'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

function StorageItem({ itemModelImage, itemProductImage, itemName, itemsInStore, itemPrice, itemSizes, updateToogler }) {
    const [heartFilled, setHeartFilled] = useState(false)

    itemModelImage = itemModelImage || background2
    itemProductImage = itemProductImage || background1
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
            e.target.style.backgroundImage === 'url("' + itemModelImage + '")'
                ? 'url("' + itemProductImage + '")'
                : 'url("' + itemModelImage + '")'
    }
    return (
        <div className='storageitem' load='lazy'>
            <div className={heartFilled ? 'hearticon hearticon-filledHeart' : 'hearticon'} onClick={fillHeartHandler}>
                {heartFilled ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </div>
            <div
                className='storageitem-image'
                onMouseEnter={toggleImageHoverHandler}
                onMouseLeave={toggleImageHoverHandler}
                style={{ backgroundImage: `url(${itemModelImage})` }}
            ></div>
            <div className='details'>
                <p
                    className='name'
                    onClick={() => {
                        if (updateToogler) {
                            updateToogler(true)
                        }
                    }}
                >
                    {itemName}
                </p>
                <div className='info'>
                    <span>{itemPrice}.00kr</span>
                    <span>{itemsInStore} in store</span>
                </div>
                <div className='sizes'>
                    {itemSizes ? (
                        itemSizes.map((size) => {
                            return (
                                <div className={size.inStore ? 'size-box fill' : 'size-box'}>{size.size.toUpperCase()}</div>
                            )
                        })
                    ) : (
                        <>
                            <div className='size-box'>XXS</div>
                            <div className='size-box'>XS</div>
                            <div className='size-box'>S</div>
                            <div className='size-box'>M</div>
                            <div className='size-box'>L</div>
                            <div className='size-box'>XL</div>
                            <div className='size-box'>XLL</div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default StorageItem
