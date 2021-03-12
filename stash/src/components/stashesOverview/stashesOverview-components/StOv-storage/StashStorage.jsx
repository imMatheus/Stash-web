import React, { useState, useEffect } from 'react'
import StorageItem from './StorageItem'
import LoadingSpinner from '../../../LoadingSpinner'

function StashStorage() {
    // loading dat from api
    const [loading, setLoading] = useState(true)
    const [fetchedData, setFetchedData] = useState(null)
    const [loadedItems, setLoadedItems] = useState(null)
    useEffect(() => {
        const dummyFunction = async () => {
            await fetch('https://fakestoreapi.com/products?limit=20')
                .then((res) => res.json())
                .then((json) => setFetchedData(json))
            // setting all items in state

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

    // sorting elements
    const sortByCheapest = (e) => {
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
                console.log(itemsArray)
            }

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
                            onChange={sortByCheapest}
                        >
                            <option value='standard'>Sort by</option>
                            <option value='cheap'>lägsta pris</option>
                            <option value='expensive'>högsta pris</option>
                        </select>
                        <div className='sorting-layoutToggler sorting-rowsLayout'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className='storage-itemsContainer'>
                        <StorageItem />
                        {loadedItems && loadedItems}
                    </div>
                </>
            )}
        </div>
    )
}

export default StashStorage

// if (e.target.value !== 'standard') {
//     let len = itemsArray.length
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - 1; j++) {
//             // if the selected input was 'cheap'
//             if (e.target.value === 'cheap') {
//                 if (itemsArray[j].price > itemsArray[j + 1].price) {
//                     itemsArray = swapNodes(itemsArray, j, j + 1)
//                 }
//             }
//             // if the selected input was 'expensive'
//             else if (e.target.value === 'expensive') {
//                 if (itemsArray[j].price < itemsArray[j + 1].price) {
//                     itemsArray = swapNodes(itemsArray, j, j + 1)
//                 }
//             }
//         }
//     }
//     console.log('test')
// }
