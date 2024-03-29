import React, { useState, useEffect } from 'react'
import WarningIcon from '@material-ui/icons/Warning'
import firebase from 'firebase'
import 'firebase/firestore'
import { firestore } from '../../../../App'

function CreateNewItem({ itemId, setToogler, emailRef }) {
    const ref = firestore.collection('users').doc(emailRef).collection('products')

    const url =
        'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd5%2F58%2Fd558d5eff3e0de84c68b909af2c7da91f4f545d7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
    const [modelImg, setModelImg] = useState(url)
    const [productImg, setProductImg] = useState(url)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [itemsInStore, setItemsInStore] = useState('')
    const [itemSizes, setItemSizes] = useState([
        { size: 'xxs', inStore: false },
        { size: 'xs', inStore: false },
        { size: 's', inStore: false },
        { size: 'm', inStore: false },
        { size: 'l', inStore: false },
        { size: 'xl', inStore: false },
        { size: 'xxl', inStore: false },
    ])

    useEffect(() => {
        if (itemId) {
            var currentItem
            const docRef = firestore.collection('users').doc(emailRef).collection('products').doc(itemId)
            docRef.get().then((doc) => {
                currentItem = doc.data()

                setModelImg(currentItem.modelImg)
                setProductImg(currentItem.productImg)
                setName(currentItem.name)
                setPrice(currentItem.price)
                setItemsInStore(currentItem.inStore)
            })
        } else {
            setItemSizes([
                { size: 'xxs', inStore: false },
                { size: 'xs', inStore: false },
                { size: 's', inStore: false },
                { size: 'm', inStore: false },
                { size: 'l', inStore: false },
                { size: 'xl', inStore: false },
                { size: 'xxl', inStore: false },
            ])
        }
    }, [])

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
            }
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e?.target?.files[0])
        }
    }

    const updateProductHandler = () => {
        if (name === '') {
            setNameError({ show: true, msg: 'Name can not be empty' })
        } else if (!price && price > 0) {
            setPriceError({ show: true, msg: 'Price can´t be empty or zero' })
        } else if (!itemsInStore) {
            setItemsInStoreError({ show: true, msg: 'Items in store can´t be empty' })
        } else if (modelImg === url) {
            alert('fill model picture please')
        } else if (productImg === url) {
            alert('choose a product picture please')
        } else {
            setToogler(false)

            const docRef = firestore.collection('users').doc(emailRef).collection('products').doc(itemId)
            // db.collection("users").doc(doc.id).update({foo: "bar"});
            docRef.update({
                name: name,
                price: price,
                inStore: itemsInStore,
                modelImg: modelImg,
                productImg: productImg,
                itemSizes: itemSizes,
            })
        }
    }

    const addProductHandler = () => {
        if (name === '') {
            setNameError({ show: true, msg: 'Name can not be empty' })
        } else if (!price && price > 0) {
            setPriceError({ show: true, msg: 'Price can´t be empty or zero' })
        } else if (!itemsInStore) {
            setItemsInStoreError({ show: true, msg: 'Items in store can´t be empty' })
        } else if (modelImg === url) {
            alert('fill model picture please')
        } else if (productImg === url) {
            alert('choose a product picture please')
        } else {
            setToogler(false)

            ref.add({
                name: name,
                price: price,
                inStore: itemsInStore,
                modelImg: modelImg,
                productImg: productImg,
                itemSizes: itemSizes,
            })
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
                                {/* {itemSizes?.map((item) => {
                                    return (
                                        <div className='size-box'>
                                            <input type='checkbox' id={item.size} checked={item.inStore} />
                                            <label htmlFor={item.size} onClick={changeSizeHandler(item.size)}>
                                                XXS
                                            </label>
                                        </div>
                                    )
                                })} */}
                                <div className='size-box'>
                                    <input type='checkbox' id='xxs' />
                                    <label
                                        htmlFor='xxs'
                                        onClick={() => {
                                            let index = itemSizes.findIndex((size) => size.size.toLowerCase() === 'xxs')
                                            setItemSizes(itemSizes, (itemSizes[index].inStore = !itemSizes[index].inStore))
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
                                            setItemSizes(itemSizes, (itemSizes[index].inStore = !itemSizes[index].inStore))
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
                                            setItemSizes(itemSizes, (itemSizes[index].inStore = !itemSizes[index].inStore))
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
                                            setItemSizes(itemSizes, (itemSizes[index].inStore = !itemSizes[index].inStore))
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
                                            setItemSizes(itemSizes, (itemSizes[index].inStore = !itemSizes[index].inStore))
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
                                            setItemSizes(itemSizes, (itemSizes[index].inStore = !itemSizes[index].inStore))
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
                                            setItemSizes(itemSizes, (itemSizes[index].inStore = !itemSizes[index].inStore))
                                        }}
                                    >
                                        XXL
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='buttons'>
                        <div className='button' onClick={itemId ? updateProductHandler : addProductHandler}>
                            {itemId ? 'Update' : 'Create'}
                        </div>

                        <div className='button' onClick={() => setToogler(false)}>
                            Go back
                        </div>
                    </div>
                </div>
                <div className='gallery'>
                    <div className='image image-small' style={{ backgroundImage: `url(${modelImg})` }}>
                        <input type='file' id='modelPic' accept='image/*' onChange={imageUploadModelImgHandler} />
                        <label htmlFor='modelPic'>
                            <div className='textbox'>Model Picture</div>
                        </label>
                    </div>

                    <div className='image image-small' style={{ backgroundImage: `url(${productImg})` }}>
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
