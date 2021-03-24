import React, { useState, useEffect } from 'react'
import StorageItem from './StorageItem'
import CreateNewItem from './CreateNewItem'
import FilterForm from './FilterForm'
import LoadingSpinner from '../../../LoadingSpinner'

function StashStorage() {
    // loading data from api
    const [loading, setLoading] = useState(true)
    const [fetchedData, setFetchedData] = useState(null)
    const [loadedItems, setLoadedItems] = useState([
        <StorageItem />,
        <StorageItem />,
        <StorageItem />,
        <StorageItem />,
        <StorageItem />,
        <StorageItem />,
        <StorageItem />,
    ])
    const [toggleCreateNewItem, setToggleCreateNewItem] = useState(false)
    /*
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
*/
    const [layoutButton, setLayoutButton] = useState('sorting-cardLayout')
    const [itemsDisplayLayout, setItemsDisplayLayout] = useState(
        'storage-container-cardsLayout'
    )

    setTimeout(() => {
        setLoading(false)
    }, 1200)

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

    return (
        <div className='stashstorage'>
            {toggleCreateNewItem ? (
                <CreateNewItem />
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
                    <div className={'storage-itemsContainer ' + itemsDisplayLayout}>
                        {loadedItems && loadedItems}
                    </div>
                </>
            )}
        </div>
    )
}

export default StashStorage
