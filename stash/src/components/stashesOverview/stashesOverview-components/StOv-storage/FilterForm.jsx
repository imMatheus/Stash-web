import React from 'react'
import StorageItem from './StorageItem'

function FilterForm({ items, setItems, setToggleCreateNewItem, toggleCreateNewItem }) {
    /*
    const sortElementsByPrice = (e) => {
        if (fetchedData) {
            let itemsArray = []
            fetchedData?.map((item) => {
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
    */
    const addItemHandler = () => {
        // setItems(
        //     [
        //         <StorageItem
        //             itemName={Math.floor(Math.random() * 200 + 1000)}
        //             itemPrice={99}
        //         />,
        //     ].concat(items)
        //     // concating so that the new item is first in the list
        // )
        setToggleCreateNewItem(!toggleCreateNewItem)
    }
    return (
        <div className='filterform'>
            <select name='sortBy' id='storage-sortBy'>
                <option value='standard'>Sort by</option>
                <option value='cheap'>Lowest price</option>
                <option value='expensive'>Highest Price</option>
            </select>
            <div className='addnewitem' onClick={addItemHandler}>
                Add new item
            </div>
        </div>
    )
}

export default FilterForm