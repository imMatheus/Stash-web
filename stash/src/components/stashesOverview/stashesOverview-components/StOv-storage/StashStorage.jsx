import React, { useState, useEffect } from 'react'
import StorageItem from './StorageItem'

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

    // used to swap elements fro the sorting part
    const swapNodes = (arr, node1, node2) => {
        let temp = arr[node1]
        arr[node1] = arr[node2]
        arr[node2] = temp
        return arr
    }

    // sorting elements
    const sortByCheapest = (e) => {
        if (fetchedData) {
            let itemsArray = []
            fetchedData.map((item) => {
                return itemsArray.push(item)
            })

            if (e.target.value !== 'standard') {
                let len = itemsArray.length
                for (let i = 0; i < len; i++) {
                    for (let j = 0; j < len - 1; j++) {
                        // if the selected input was 'cheap'
                        if (e.target.value === 'cheap') {
                            if (itemsArray[j].price > itemsArray[j + 1].price) {
                                itemsArray = swapNodes(itemsArray, j, j + 1)
                            }
                        }
                        // if the selected input was 'expensive'
                        else if (e.target.value === 'expensive') {
                            if (itemsArray[j].price < itemsArray[j + 1].price) {
                                itemsArray = swapNodes(itemsArray, j, j + 1)
                            }
                        }
                    }
                }
                console.log('test')
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
            <div className='storage-itemsContainer'>
                {loading ? (
                    'loading'
                ) : (
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
                        </div>
                        {/* <StorageItem />
                        <StorageItem itemImage={testImage} itemName='vatten flaska' /> */}
                        {loadedItems && loadedItems}
                    </>
                )}
            </div>
        </div>
    )
}

export default StashStorage
