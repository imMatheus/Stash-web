import React, { useState, useEffect } from 'react'
import StorageItem from './StorageItem'
import LoadingSpinner from '../../../LoadingSpinner'

function StashStorage() {
    // loading data from api
    const [loading, setLoading] = useState(true)
    const [fetchedData, setFetchedData] = useState(null)
    const [loadedItems, setLoadedItems] = useState(null)
    useEffect(() => {
        console.log(fetchedData)

        const dummyFunction = async () => {
            await fetch('https://fakestoreapi.com/products?limit=20')
                .then((res) => res.json())
                .then((json) => setFetchedData(json))
            // setting all items in state

            console.log(fetchedData)
            setLoading(false)
        }

        dummyFunction()
    }, [])

    useEffect(() => {
        setLoadedItems(
            fetchedData &&
                fetchedData.map((item) => {
                    return (
                        <StorageItem
                            key={item.id}
                            itemImage={item.image}
                            itemName={item.title}
                            itemPrice={item.price}
                            itemsInStore={item.id}
                        />
                    )
                })
        )
    }, [fetchedData])

    const [layoutButton, setLayoutButton] = useState('sorting-cardLayout')
    const [itemsDisplayLayout, setItemsDisplayLayout] = useState(
        'storage-container-cardsLayout'
    )

    const changeLayoutHandler = () => {
        layoutButton === 'sorting-cardLayout'
            ? setLayoutButton('sorting-rowLayout')
            : setLayoutButton('sorting-cardLayout')

        // itemsDisplayLayout === 'storage-container-cardsLayout'
        //     ? setItemsDisplayLayout('storage-container-rowsLayout')
        //     : setItemsDisplayLayout('storage-container-cardsLayout')
        setItemsDisplayLayout('storage-container-cardsLayout')
    }

    const openItemsHandler = () => {
        const items = document.getElementsByClassName('storageItem-checkbox')
        for (let i = 0; i < items.length; i++) {
            items[i].checked = false
        }
    }

    const closeItemsHandler = () => {
        const items = document.getElementsByClassName('storageItem-checkbox')
        for (let i = 0; i < items.length; i++) {
            items[i].checked = true
        }
    }

    // sorting elements by price
    const sortElementsByPrice = (e) => {
        if (fetchedData) {
            let itemsArray = []
            fetchedData.map((item) => {
                return itemsArray.push(item)
            })

            const quicksort = (testArr) => {
                let array = testArr
                if (array.length <= 1) {
                    return array
                }

                var pivot = array[0]
                var left = []
                var right = []

                for (var i = 1; i < array.length; i++) {
                    if (e.target.value === 'cheap') {
                        array[i]?.price < pivot?.price
                            ? left.push(array[i])
                            : right.push(array[i])
                    } else if (e.target.value === 'expensive') {
                        array[i]?.price > pivot?.price
                            ? left.push(array[i])
                            : right.push(array[i])
                    }
                }

                return quicksort(left).concat(pivot, quicksort(right))
            }

            if (e.target.value !== 'standard') {
                itemsArray = quicksort(itemsArray)
            }

            // updateing the loaded elements to be in order
            setLoadedItems(
                itemsArray &&
                    itemsArray.map((item) => {
                        return (
                            <StorageItem
                                key={item.id}
                                itemImage={item.image}
                                itemName={item.title}
                                itemPrice={item.price}
                                itemsInStore={item.id}
                            />
                        )
                    })
            )
        }
    }

    return (
        <div className='stashstorage'>
            {loading ? (
                // if we dont have our items show loading spinner
                <LoadingSpinner />
            ) : (
                // else show the items
                <>
                    <div className='storage-sorting'>
                        <select
                            name='sortBy'
                            id='storage-sortBy'
                            onChange={sortElementsByPrice}
                        >
                            <option value='standard'>Sort by</option>
                            <option value='cheap'>lägsta pris</option>
                            <option value='expensive'>högsta pris</option>
                        </select>
                        <div
                            className={' sorting-layoutToggler ' + layoutButton}
                            onClick={changeLayoutHandler}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div
                            className='toggleDropdowns openDropdowns'
                            onClick={openItemsHandler}
                        >
                            <span></span>
                            <span></span>
                        </div>
                        <div
                            className='toggleDropdowns closeDropdowns'
                            onClick={closeItemsHandler}
                        >
                            <span></span>
                        </div>
                    </div>
                    {/* the items */}
                    <div className={'storage-itemsContainer ' + itemsDisplayLayout}>
                        {loadedItems && loadedItems}
                    </div>
                </>
            )}
        </div>
    )
}

export default StashStorage
