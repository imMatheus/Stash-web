import React, { useState, useEffect } from 'react'

import 'firebase/firestore'
import 'firebase/auth'
import firebase from 'firebase'
import { auth } from '../../../../App'
import { firestore } from '../../../../App'
import { useAuthState } from 'react-firebase-hooks/auth'
import '../../../../global.css'

import StorageItem from './StorageItem'
import CreateNewItem from './CreateNewItem'
import FilterForm from './FilterForm'
import LoadingSpinner from '../../../LoadingSpinner'

function StashStorage() {
    const [user] = useAuthState(auth)
    const emailRef = user.email
    const usersRef = firestore.collection('users')

    useEffect(() => {
        usersRef.doc(emailRef).set({
            email: emailRef,
        })

        usersRef
            .doc(emailRef)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    usersRef
                        .doc(emailRef)
                        .collection('products')
                        .get()
                        .then((sub) => {
                            if (!sub.docs.length > 0) {
                                usersRef.doc(emailRef).collection('products').add({})
                            }
                        })
                }
            })
    }, [])

    const ref = firestore.collection('users').doc(emailRef).collection('products')

    const getItems = () => {
        setLoading(true)
        ref.onSnapshot((querySnapshot) => {
            const dummyItems = []
            querySnapshot.forEach((doc) => {
                dummyItems.push(doc.data())
            })
            setLoadedItems(
                dummyItems?.map((item) => {
                    if (item.name !== undefined) {
                        return (
                            <StorageItem
                                key={Math.floor(Math.random() * 99999)}
                                itemsInStore={item.inStore}
                                itemPrice={item.price}
                                itemName={item.name}
                                itemSizes={item.itemSizes}
                                itemModelImage={item.modelImg}
                                itemProductImage={item.productImg}
                            />
                        )
                    }
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

    const signOutHandler = () => {
        auth.signOut()
        firebase
            .firestore()
            .clearPersistence()
            .catch((error) => {
                console.error('Could not enable persistence:', error.code)
            })
    }
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
                    {auth.currentUser && <button onClick={signOutHandler}>Sign Out</button>}
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
