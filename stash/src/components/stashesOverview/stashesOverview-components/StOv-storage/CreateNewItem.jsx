import React, { useState } from 'react'

function CreateNewItem() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [itemsInStore, setItemsInStore] = useState('')

    return (
        <div className='newitemform'>
            <div className='content'>
                <div className='form'></div>
                <div className='showcase'>
                    <div className='sidetext'>Showcase</div>
                    <div className='card'>
                        <div className='image'></div>
                        <div className='details'>
                            <p className={name.length > 0 ? 'name ' : 'name faded'}>
                                {name.length > 0
                                    ? name
                                    : 'Please fill in the prdouct name'}
                            </p>
                            <div className='info'>
                                <span>123.00kr</span>
                                <span>345 in store</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='button'>Create</div>
            </div>
        </div>
    )
}

export default CreateNewItem
