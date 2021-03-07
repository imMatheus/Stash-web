import React from 'react'
import StorageItem from './StorageItem'

function StashStorage() {
    let testImage =
        'https://images.unsplash.com/photo-1597106776019-b4ecc878c202?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    return (
        <div className='stashstorage'>
            <div className='storage-sorting'></div>
            <div className='storage-itemsContainer'>
                <StorageItem itemImage={testImage} />
                <StorageItem itemImage={testImage} />
                <StorageItem itemImage={testImage} />
                <StorageItem itemImage={testImage} />
                <StorageItem itemImage={testImage} />
                <StorageItem itemImage={testImage} />
                <StorageItem itemImage={testImage} />
                <StorageItem itemImage={testImage} />
            </div>
        </div>
    )
}

export default StashStorage
