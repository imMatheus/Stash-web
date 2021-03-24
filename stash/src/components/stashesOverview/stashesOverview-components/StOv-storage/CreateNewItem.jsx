import React, { useState } from 'react'

function CreateNewItem() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [itemsInStore, setItemsInStore] = useState('')

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }

    const priceChangeHandler = (e) => {
        setPrice(e.target.value)
    }

    const itemsInStoreChangeHandler = (e) => {
        setItemsInStore(e.target.value)
    }

    return (
        <div className='newitemform'>
            <div className='content'>
                <div className='inputs'>
                    <div className='form'>
                        <div className='form-group wideForm'>
                            <span>Product Name</span>
                            <input
                                className='form-field'
                                type='text'
                                placeholder='My Product'
                                onChange={nameChangeHandler}
                            />
                        </div>

                        <div className='form-group '>
                            <span>Price</span>
                            <input
                                className='form-field'
                                type='text'
                                placeholder='Product Price'
                                onChange={priceChangeHandler}
                            />
                        </div>
                        <div className='form-group '>
                            <span>In Store</span>
                            <input
                                className='form-field'
                                type='text'
                                placeholder='Items in store'
                                onChange={itemsInStoreChangeHandler}
                            />
                        </div>
                        <div className='form-group wideForm'>
                            <span>Sizes</span>
                            <div className='form-field sizes-container'>
                                <input className='size-box' type='checkbox' name='s-size' id='medium' />
                                <input className='size-box' type='checkbox' name='s-size' id='large' />
                                <input className='size-box' type='checkbox' name='s-size' id='x-large' />
                                <input className='size-box' type='checkbox' name='s-size' id='xx-large' />

                                {/* <label for='small'>S</label>
                                <label for='medium'>M</label>
                                <label for='large'>L</label>
                                <label for='x-large'>XL</label>
                                <label for='xx-large'>XXL</label> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='gallery'>
                    <div className='image image-small'></div>
                    <div className='image image-flat'></div>
                    <div className='image image-square'></div>
                    <div className='image image-square'></div>
                </div>
            </div>
            <div className='footer'>
                <div className='button'>Create</div>
            </div>
        </div>
    )
}

export default CreateNewItem
