import React, { useState, useEffect } from 'react'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { auth } from '../../../../App'
import { firestore } from '../../../../App'
import '../../../../global.css'

import StorageItem from './StorageItem'
import CreateNewItem from './CreateNewItem'
import FilterForm from './FilterForm'
import LoadingSpinner from '../../../LoadingSpinner'

function StashStorage() {
    const [fetchedData, setFetchedData] = useState(null)
    const ref = firestore.collection('users').doc('eKQXvbnl8OQ4Fq4b3rfV').collection('products')

    const getItems = () => {
        setLoading(true)
        ref.onSnapshot((querySnapshot) => {
            const dummyItems = []
            querySnapshot.forEach((doc) => {
                dummyItems.push(doc.data())
            })
            console.log(dummyItems)
            setLoadedItems(
                dummyItems?.map((item) => {
                    return <StorageItem itemsInStore={item.inStore} itemPrice={item.price} itemName={item.name} />
                })
            )
            setLoading(false)
        })
    }
    useEffect(() => {
        getItems()
    }, [])

    const [loading, setLoading] = useState(false)
    const [loadedItems, setLoadedItems] = useState([<StorageItem />, <StorageItem />])
    const [toggleCreateNewItem, setToggleCreateNewItem] = useState(false)

    return (
        <div className='stashstorage'>
            {toggleCreateNewItem ? (
                <CreateNewItem setToogler={setToggleCreateNewItem} items={loadedItems} setItems={setLoadedItems} />
            ) : loading ? (
                // if we dont have our items show loading spinner
                <LoadingSpinner />
            ) : (
                // else show the items
                <>
                    {auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>}
                    <FilterForm
                        setToggleCreateNewItem={setToggleCreateNewItem}
                        toggleCreateNewItem={toggleCreateNewItem}
                        items={loadedItems}
                        setItems={setLoadedItems}
                    />

                    {/* the items */}
                    <div className={'storage-itemsContainer'}>{loadedItems && loadedItems}</div>
                </>
            )}
        </div>
    )
}

export default StashStorage
