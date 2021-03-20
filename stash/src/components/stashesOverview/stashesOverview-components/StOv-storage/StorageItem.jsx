import React, { useEffect } from 'react'
import background from '../../../../images/stash-men.jpg'
import CreateIcon from '@material-ui/icons/Create'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'

function StorageItem({ itemImage, itemName, itemsInStore, itemPrice }) {
    useEffect(() => {
        const dummyFunction = async () => {
            console.log('hej')
        }

        dummyFunction()
        // url(https://unsplash.com/collections/57989476/male-models)
    }, [])
    let testId = itemImage + '' + Math.floor(Math.random() * 2000000)
    itemImage = itemImage || background
    itemName = itemName || 'No Name Given'
    itemsInStore = itemsInStore || '13'
    itemPrice = itemPrice || Math.floor(Math.random() * 40)
    return (
        <div className='storageitem' load='lazy'>
            <div className='hearticon'>
                <FavoriteBorderOutlinedIcon />
            </div>
        </div>
    )
}

export default StorageItem
