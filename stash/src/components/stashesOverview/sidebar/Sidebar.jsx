import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import StorageIcon from '@material-ui/icons/Storage'
import AssessmentIcon from '@material-ui/icons/Assessment'
import ChatIcon from '@material-ui/icons/Chat'
import StoreIcon from '@material-ui/icons/Store'

function Sidebar() {
    return (
        <Router>
            <div className='sidebar'>
                <div className='sidebar-logo'>Stash</div>
                <Link to='/storage'>
                    <div className='sidebar-option'>
                        <StorageIcon />
                        <span>Storage</span>
                    </div>
                </Link>
                <Link to='/'>
                    <div className='sidebar-option'>
                        <AssessmentIcon />
                        <span>Analytics</span>
                    </div>
                </Link>
                <div className='sidebar-option'>
                    <ChatIcon />
                    <span>Messages</span>
                </div>
                <Link to='/shop'>
                    <div className='sidebar-option'>
                        <StoreIcon />
                        <span>Shop</span>
                    </div>
                </Link>
            </div>
        </Router>
    )
}

export default Sidebar
