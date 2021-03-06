import React from 'react'
import StorageIcon from '@material-ui/icons/Storage'
import AssessmentIcon from '@material-ui/icons/Assessment'
import ChatIcon from '@material-ui/icons/Chat'
import StoreIcon from '@material-ui/icons/Store'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-logo'>Stash</div>
            <div className='sidebar-option'>
                <StorageIcon />
                <span>Storage</span>
            </div>
            <div className='sidebar-option'>
                <AssessmentIcon />
                <span>Anilitics</span>
            </div>
            <div className='sidebar-option'>
                <ChatIcon />
                <span>Messages</span>
            </div>
            <div className='sidebar-option'>
                <StoreIcon />
                <span>Shop</span>
            </div>
        </div>
    )
}

export default Sidebar
