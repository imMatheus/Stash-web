import React from 'react'
import StorageItem from './StorageItem'

function FilterForm({ items, setItems, setToggleCreateNewItem, toggleCreateNewItem }) {
    const sortElementsByPrice = (e) => {
        if (items) {
            let itemsArray = []
            items.map((item) => {
                return itemsArray.push(item)
            })
            console.log(items)

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
                        array[i]?.price < pivot?.price ? left.push(array[i]) : right.push(array[i])
                    } else if (e.target.value === 'expensive') {
                        array[i]?.price > pivot?.price ? left.push(array[i]) : right.push(array[i])
                    }
                }

                return quicksort(left).concat(pivot, quicksort(right))
            }

            if (e.target.value !== 'standard') {
                itemsArray = quicksort(itemsArray)
                console.log(itemsArray)
            }

            // updateing the loaded elements to be in order
            // setItems(
            //     itemsArray &&
            //         itemsArray.map((item) => {
            //             return (
            //                 <StorageItem
            //                     key={item.id}
            //                     // itemModelImage={item.image}
            //                     itemName={item.title}
            //                     itemPrice={item.price}
            //                     itemsInStore={item.id}
            //                 />
            //             )
            //         })
            // )
        }
    }

    const addItemHandler = () => {
        setToggleCreateNewItem(!toggleCreateNewItem)
    }
    return (
        <>
            <div className='filterform'>
                <select name='sortBy' id='storage-sortBy' onChange={sortElementsByPrice}>
                    <option value='standard'>Sort by</option>
                    <option value='cheap'>Lowest price</option>
                    <option value='expensive'>Highest Price</option>
                </select>
                <div className='addnewitem' onClick={addItemHandler}>
                    Add new item
                </div>
            </div>
        </>
    )
}

export default FilterForm
