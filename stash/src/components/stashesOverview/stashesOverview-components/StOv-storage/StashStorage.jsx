import React, { useState, useEffect } from 'react'
import StorageItem from './StorageItem'
import LoadingSpinner from '../../../LoadingSpinner'

function StashStorage() {
    // loading data from api

    const [loading, setLoading] = useState(true)
    const [fetchedData, setFetchedData] = useState(null)
    const [loadedItems, setLoadedItems] = useState(null)
    useEffect(() => {
        const dummyFunction = async () => {
            // url(https://unsplash.com/collections/57989476/male-models)
            // https://source.unsplash.com/collection/
            // 'https://api.unsplash.com/collections/57989476/&client_id=IW7o-gg6dHhJ5UBDGi5jyoCPoMtn_2zg1hWHrWLHKwM'
            // 'https://api.unsplash.com/collections/57989476/?client_id=IW7o-gg6dHhJ5UBDGi5jyoCPoMtn_2zg1hWHrWLHKwM'

            //unsplash.com/collections/1394103/tokyo
            const url =
                'https://api.unsplash.com/collections/4303779/photos?per_page=60&client_id=IW7o-gg6dHhJ5UBDGi5jyoCPoMtn_2zg1hWHrWLHKwM'
            await fetch(url)
                .then((response) => response.json())
                .then((json) => setFetchedData(json))
            console.log(fetchedData)
        }

        dummyFunction()
    }, [])

    useEffect(() => {
        setLoading(false)
    }, [loadedItems])

    useEffect(() => {
        console.log('4')
        console.log(fetchedData)
        if (fetchedData) {
            console.log('------------')
            console.log(fetchedData)
            setLoadedItems(
                fetchedData.map((item) => {
                    return (
                        <StorageItem
                            key={item.id}
                            itemImage={item.urls.raw}
                            itemName={item.alt_description}
                        />
                    )
                })
            )
        } else {
            setLoadedItems(
                <StorageItem
                // key={fetchedData.id}
                // itemImage={fetchedData.thumbnailUrl}
                // itemName={fetchedData.title}
                // itemPrice={fetchedData.itemsDisplayLayout}
                // itemsInStore={fetchedData.id}
                />
            )
        }

        console.log('3')
        // console.log(loadedItems)
    }, [fetchedData, loading])

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
                        <StorageItem />

                        {loadedItems && loadedItems}
                    </div>
                </>
            )}
        </div>
    )
}

export default StashStorage
