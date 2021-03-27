import React, { useState, useEffect } from 'react'
import WarningIcon from '@material-ui/icons/Warning'
import firebase from 'firebase'
import 'firebase/firestore'
import { firestore } from '../../../../App'

function CreateNewItem({ items, setItems, setToogler }) {
    var currentUser = firebase.auth().currentUser
    const emailRef = currentUser.email
    const ref = firestore.collection('users').doc(emailRef).collection('products')

    const url =
        'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd5%2F58%2Fd558d5eff3e0de84c68b909af2c7da91f4f545d7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
    const [modelImg, setModelImg] = useState(url)
    const [secondModelImg, setSecondModelImg] = useState(url)
    const [CloseUpImg, setCloseUpImg] = useState(url)
    const [productImg, setProductImg] = useState(url)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [itemsInStore, setItemsInStore] = useState('')
    const [itemSizes, setitemSizes] = useState([
        { size: 'xxs', inStore: false },
        { size: 'xs', inStore: false },
        { size: 's', inStore: false },
        { size: 'm', inStore: false },
        { size: 'l', inStore: false },
        { size: 'xl', inStore: false },
        { size: 'xxl', inStore: false },
    ])

    const [nameError, setNameError] = useState({ show: false, msg: '' })
    const [priceError, setPriceError] = useState({ show: false, msg: '' })
    const [itemsInStoreError, setItemsInStoreError] = useState({ show: false, msg: '' })

    const nameChangeHandler = (e) => {
        let inputName = e.target.value
        if (inputName.length >= 40) {
            setNameError({ show: true, msg: 'The product name can not exeed 40 charecters' })
        } else if (!/[a-zA-Z]/.test(inputName.charAt(0))) {
            setNameError({ show: true, msg: 'Product name may not start with a non-alphanumeric character' })
        }

        if (inputName.length <= 40 && (/[a-zA-Z]/.test(inputName.charAt(0)) || inputName.charAt(0) === '')) {
            setName(inputName)
            setNameError({ show: false, msg: '' })
        }
    }

    const priceChangeHandler = (e) => {
        let num = e.target.value
        let isNumber = !isNaN(num)

        //checking if we already have an error
        if (!priceError.show) {
            if (!isNumber) {
                setPriceError({ show: true, msg: 'Please enter digits only' })
            } else if (num > 10 ** 5) {
                setPriceError({ show: true, msg: 'Price cant be more then 100´000' })
                setTimeout(() => {
                    setPriceError({ show: false, msg: '' })
                }, 3500)
            }
        }

        if (isNumber && num % 1 === 0 && num.indexOf('.') === -1 && num < 10 ** 5) {
            setPrice(num)
            setPriceError({ show: false, msg: '' })
        }
    }

    const itemsInStoreChangeHandler = (e) => {
        let num = e.target.value
        let isNumber = !isNaN(num)

        //checking if we already have an error
        if (!itemsInStoreError.show) {
            if (!isNumber) {
                setItemsInStoreError({ show: true, msg: 'Please enter digits only' })
            } else if (num > 10 ** 5) {
                setItemsInStoreError({ show: true, msg: 'Items in store can´t be more then 100´000' })
                setTimeout(() => {
                    setItemsInStoreError({ show: false, msg: '' })
                }, 3500)
            }
        }

        if (isNumber && num % 1 === 0 && num.indexOf('.') === -1 && num < 10 ** 5) {
            setItemsInStore(num)
            setItemsInStoreError({ show: false, msg: '' })
        }
    }

    const imageUploadModelImgHandler = (e) => {
        const reader = new FileReader()

        reader.onload = () => {
            if (reader.readyState === 2) {
                setModelImg(reader.result)
                console.log(e.target)
            }
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e?.target?.files[0])
        }
    }
    const imageUploadSecondModelImgHandler = (e) => {
        const reader = new FileReader()

        reader.onload = () => {
            if (reader.readyState === 2) {
                setSecondModelImg(reader.result)
                console.log(e.target)
            }
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e?.target?.files[0])
        }
    }
    const imageUploadCloseUpImgHandler = (e) => {
        const reader = new FileReader()

        reader.onload = () => {
            if (reader.readyState === 2) {
                setCloseUpImg(reader.result)
                console.log(e.target)
            }
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e?.target?.files[0])
        }
    }
    const imageUploadProductHandler = (e) => {
        const reader = new FileReader()

        reader.onload = () => {
            if (reader.readyState === 2) {
                setProductImg(reader.result)
                console.log(e.target)
            }
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e?.target?.files[0])
        }
    }

    const addProductHandler = () => {
        if (name === '') {
            setNameError({ show: true, msg: 'Name can not be empty' })
        }
        //else if (!price && price > 0) {
        //     setPriceError({ show: true, msg: 'Price can´t be empty or zero' })
        // } else if (!itemsInStore) {
        //     setItemsInStoreError({ show: true, msg: 'Items in store can´t be empty' })
        // } else if (modelImg === url) {
        //     alert('fill model picture please')
        // } else if (productImg === url) {
        //     alert('choose a product picture please')}
        else {
            setToogler(false)
            console.log(ref)
            ref.add({
                name: name,
                price: price,
                inStore: itemsInStore,
                modelImg: modelImg,
                productImg: productImg,
                itemSizes: itemSizes,
            }).then(() => console.log('det funka jippi'))
            // setItems(
            //     [
            //         <StorageItem
            //             itemName={name}
            //             itemPrice={price}
            //             itemsInStore={itemsInStore}
            //             itemModelImage={modelImg}
            //             itemProductImage={productImg}
            //             itemSizes={itemSizes}
            //             updateToogler={setToogler}
            //         />,
            //     ].concat(items)
            // concating so that the new item is first in the list
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
                            <span>Price(kr)</span>
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
                            <div className={itemsInStoreError.show ? 'error show' : 'error'}>
                                <WarningIcon /> {itemsInStoreError.msg}
                            </div>
                        </div>
                        <div className='form-group wideForm'>
                            <span>Sizes</span>
                            <div className='form-field sizes-container'>
                                <div className='size-box'>
                                    <input type='checkbox' id='xxs' />
                                    <label
                                        htmlFor='xxs'
                                        onClick={() => {
                                            let index = itemSizes.findIndex((size) => size.size.toLowerCase() === 'xxs')
                                            setitemSizes(itemSizes, (itemSizes[index].inStore = !itemSizes[index].inStore))
                                        }}
                                    >
                                        XXS
                                    </label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' id='xs' />
                                    <label
                                        htmlFor='xs'
                                        onClick={() => {
                                            let index = itemSizes.findIndex((size) => size.size.toLowerCase() === 'xs')
                                            setitemSizes(itemSizes, (itemSizes[index].inStore = !itemSizes[index].inStore))
                                        }}
                                    >
                                        XS
                                    </label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' id='s' />
                                    <label
                                        htmlFor='s'
                                        onClick={() => {
                                            let index = itemSizes.findIndex((size) => size.size.toLowerCase() === 's')
                                            setitemSizes(itemSizes, (itemSizes[index].inStore = !itemSizes[index].inStore))
                                        }}
                                    >
                                        S
                                    </label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' id='medium' />
                                    <label
                                        htmlFor='medium'
                                        onClick={() => {
                                            let index = itemSizes.findIndex((size) => size.size.toLowerCase() === 'm')
                                            setitemSizes(itemSizes, (itemSizes[index].inStore = !itemSizes[index].inStore))
                                            console.log(itemSizes)
                                        }}
                                    >
                                        M
                                    </label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' id='l' />
                                    <label
                                        htmlFor='l'
                                        onClick={() => {
                                            let index = itemSizes.findIndex((size) => size.size.toLowerCase() === 'l')
                                            setitemSizes(itemSizes, (itemSizes[index].inStore = !itemSizes[index].inStore))
                                        }}
                                    >
                                        L
                                    </label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' id='xl' />
                                    <label
                                        htmlFor='xl'
                                        onClick={() => {
                                            let index = itemSizes.findIndex((size) => size.size.toLowerCase() === 'xl')
                                            setitemSizes(itemSizes, (itemSizes[index].inStore = !itemSizes[index].inStore))
                                        }}
                                    >
                                        XL
                                    </label>
                                </div>
                                <div className='size-box'>
                                    <input type='checkbox' id='xxl' />
                                    <label
                                        htmlFor='xxl'
                                        onClick={() => {
                                            let index = itemSizes.findIndex((size) => size.size.toLowerCase() === 'xxl')
                                            setitemSizes(itemSizes, (itemSizes[index].inStore = !itemSizes[index].inStore))
                                        }}
                                    >
                                        XXL
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='button' onClick={addProductHandler}>
                        Create
                    </div>

                    <div className='button' onClick={() => setToogler(false)}>
                        Go back
                    </div>
                </div>
                <div className='gallery'>
                    <div className='image image-small' style={{ backgroundImage: `url(${modelImg})` }}>
                        <input type='file' id='modelPic' accept='image/*' onChange={imageUploadModelImgHandler} />
                        <label htmlFor='modelPic'>
                            <div className='textbox'>Model Picture</div>
                        </label>
                    </div>
                    <div className='image image-flat' style={{ backgroundImage: `url(${CloseUpImg})` }}>
                        <input type='file' id='closeUpPic' accept='image/*' onChange={imageUploadCloseUpImgHandler} />
                        <label htmlFor='closeUpPic'>
                            <div className='textbox'>Close Up Picture</div>
                        </label>
                    </div>
                    <div className='image image-square' style={{ backgroundImage: `url(${secondModelImg})` }}>
                        <input
                            type='file'
                            id='secondModelPic'
                            accept='image/*'
                            onChange={imageUploadSecondModelImgHandler}
                        />
                        <label htmlFor='secondModelPic'>
                            <div className='textbox'>Second Model Picture</div>
                        </label>
                    </div>
                    <div className='image image-square' style={{ backgroundImage: `url(${productImg})` }}>
                        <input type='file' id='productImg' accept='image/*' onChange={imageUploadProductHandler} />
                        <label htmlFor='productImg'>
                            <div className='textbox'>Product Picture</div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNewItem
