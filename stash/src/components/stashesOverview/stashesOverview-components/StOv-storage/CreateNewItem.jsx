import React, { useState } from 'react'

function CreateNewItem() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [itemsInStore, setItemsInStore] = useState('')

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }

    const priceChangeHandler = (e) => {
        if (!isNaN(e.target.value)) {
            setPrice(e.target.value)
            return
        } else {
            setPrice(price)
            alert('hej')
            return
        }
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
                                <div className='size-box'>
                                    <input type='checkbox' name='medium' id='xs' />
                                    <label htmlFor='xs'>xs</label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' name='medium' id='s' />
                                    <label htmlFor='s'>S</label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' name='medium' id='medium' />
                                    <label htmlFor='medium'>M</label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' name='medium' id='l' />
                                    <label htmlFor='l'>L</label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' name='medium' id='xl' />
                                    <label htmlFor='xl'>XL</label>
                                </div>
                                {/* <div className='sizebox'>
                                    <input type='checkbox' name='s-size' id='large' />
                                    <label for='large'>L</label>
                                </div> */}
                                {/* <input className='size-box' type='checkbox' name='s-size' id='x-large' />
                                <input className='size-box' type='checkbox' name='s-size' id='xx-large' /> */}
                                {/* <label for='medium'>M</label> */}
                                {/* <label for='x-large'>XL</label>
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
