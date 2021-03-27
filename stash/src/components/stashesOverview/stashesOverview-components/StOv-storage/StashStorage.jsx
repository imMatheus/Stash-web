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

    const [currentId, setCurrentId] = useState(null)

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
                dummyItems.push([doc.data(), doc.Df.key.path.segments[8]])
            })

            setLoadedItems(
                dummyItems?.map((item) => {
                    if (item[0].name !== undefined) {
                        return (
                            <StorageItem
                                key={item[1]}
                                firebaseId={item[1]}
                                setCurrent={setCurrentId}
                                itemsInStore={item[0].inStore}
                                itemPrice={item[0].price}
                                itemName={item[0].name}
                                itemSizes={item[0].itemSizes}
                                itemModelImage={item[0].modelImg}
                                itemProductImage={item[0].productImg}
                                updateToogler={setToggleCreateNewItem}
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
    const [loadedItems, setLoadedItems] = useState(null)
    const [toggleCreateNewItem, setToggleCreateNewItem] = useState(false)

    return (
        <div className='stashstorage'>
            {toggleCreateNewItem ? (
                <CreateNewItem
                    emailRef={emailRef}
                    setToogler={setToggleCreateNewItem}
                    itemId={currentId}
                    items={loadedItems}
                    setItems={setLoadedItems}
                />
            ) : loading ? (
                // if we dont have our items show loading spinner
                <LoadingSpinner />
            ) : (
                // else show the items
                <>
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
