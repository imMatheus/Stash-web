import React, { useState, useEffect } from 'react'
import StorageItem from './StorageItem'

function StashStorage() {
    const [loading, setLoading] = useState(true)
    const [fetchedData, setFetchedData] = useState(null)
    useEffect(() => {
        const dummyFunction = async () => {
            await fetch('https://fakestoreapi.com/products?limit=20')
                .then((res) => res.json())
                .then((json) => setFetchedData(json))
            console.log(fetchedData)
            setLoading(false)
        }

        dummyFunction()
    }, [])

    let testImage =
        'https://images.unsplash.com/photo-1597106776019-b4ecc878c202?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    return (
        <div className='stashstorage'>
            <div className='storage-sorting'></div>
            <div className='storage-itemsContainer'>
                <StorageItem />
                <StorageItem itemImage={testImage} itemName='vatten flaska' />
                {loading
                    ? null
                    : fetchedData.map((item) => {
                          return (
                              <StorageItem
                                  key={item.id}
                                  itemImage={item.image}
                                  itemName={item.title}
                                  itemPrice={item.price}
                                  itemsInStore={item.id}
                              />
                          )
                      })}
            </div>
        </div>
    )
}

export default StashStorage
