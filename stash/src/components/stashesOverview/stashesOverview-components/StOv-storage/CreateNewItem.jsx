import React, { useState } from 'react'
import WarningIcon from '@material-ui/icons/Warning'

function CreateNewItem() {
    const [modelImg, setModelImg] = useState(
        'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd5%2F58%2Fd558d5eff3e0de84c68b909af2c7da91f4f545d7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
    )
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [itemsInStore, setItemsInStore] = useState('')

    const [nameError, setNameError] = useState({ show: false, msg: '' })
    const [priceError, setPriceError] = useState({ show: false, msg: '' })
    const [itemsInStoreError, setItemsInStoreError] = useState({ show: false, msg: '' })

    const nameChangeHandler = (e) => {
        if (!nameError.show) {
            let inputName = e.target.value
            if (inputName.length >= 43) {
                setNameError({ show: true, msg: 'The product name can not exeed 43 charecters' })
            } else if (!/[a-zA-Z]/.test(inputName.charAt(0))) {
                setNameError({ show: true, msg: 'Product name may not start with a non-alphanumeric character' })
            }

            if (inputName.length < 43 && (/[a-zA-Z]/.test(inputName.charAt(0)) || inputName.charAt(0) === '')) {
                setName(inputName)
            }
            //removing the msg after 3.5 sec
            setTimeout(() => {
                setNameError({ show: false, msg: '' })
            }, 3500)
        }
    }

    const priceChangeHandler = (e) => {
        let num = e.target.value
        let isNumber = !isNaN(num)

        if (!isNumber) {
            setPriceError({ show: true, msg: 'The price is not a number' })
        }

        if (isNumber && num % 1 === 0 && num.indexOf('.') === -1 && num < 10 ** 6) {
            setPrice(num)
        }

        setTimeout(() => {
            setPriceError({ show: false, msg: '' })
        }, 3500)
    }

    const itemsInStoreChangeHandler = (e) => {
        let num = e.target.value
        let isNumber = !isNaN(num)
        if (isNumber && num % 1 === 0 && num.indexOf('.') === -1 && num < 10 ** 6) {
            setItemsInStore(e.target.value)
        }
    }

    const imageUploadHandler = (e) => {
        const reader = new FileReader()

        reader.onload = () => {
            if (reader.readyState === 2) {
                setModelImg(reader.result)
                console.log(e.target)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const addProductHandler = () => {
        if (name.length > 0) {
            console.log('bra')
        } else {
            alert('inte bra')
        }
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
                                value={name}
                            />
                            <div className={nameError.show ? 'error show' : 'error'}>
                                <WarningIcon /> {nameError.msg}
                            </div>
                        </div>

                        <div className='form-group '>
                            <span>Price</span>
                            <input
                                className='form-field'
                                type='text'
                                placeholder='Product Price'
                                onChange={priceChangeHandler}
                                value={price}
                            />
                            <div className={priceError.show ? 'error show' : 'error'}>
                                <WarningIcon /> {priceError.msg}
                            </div>
                        </div>
                        <div className='form-group '>
                            <span>In Store</span>
                            <input
                                className='form-field'
                                type='text'
                                placeholder='Items in store'
                                onChange={itemsInStoreChangeHandler}
                                value={itemsInStore}
                            />
                        </div>
                        <div className='form-group wideForm'>
                            <span>Sizes</span>
                            <div className='form-field sizes-container'>
                                <div className='size-box'>
                                    <input type='checkbox' id='xxs' />
                                    <label htmlFor='xxs'>XXS</label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' id='xs' />
                                    <label htmlFor='xs'>XS</label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' id='s' />
                                    <label htmlFor='s'>S</label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' id='medium' />
                                    <label htmlFor='medium'>M</label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' id='l' />
                                    <label htmlFor='l'>L</label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' id='xl' />
                                    <label htmlFor='xl'>XL</label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' id='xxl' />
                                    <label htmlFor='xxl'>XXL</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='gallery'>
                    <div className='image image-small' style={{ backgroundImage: `url(${modelImg})` }}>
                        <input type='file' id='modelPic' accept='image/*' onChange={imageUploadHandler} />
                        <label htmlFor='modelPic'>
                            <div className='textbox'>Model Picture</div>
                        </label>
                    </div>
                    <div className='image image-flat'>
                        <div className='textbox'>Model Picture</div>
                    </div>
                    <div className='image image-square'>
                        <div className='textbox'>Model Picture</div>
                    </div>
                    <div className='image image-square' style={{ backgroundImage: `url(${modelImg})` }}>
                        <div className='textbox'>Model Picture</div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='button' onClick={addProductHandler}>
                    Create
                </div>
            </div>
        </div>
    )
}

export default CreateNewItem
