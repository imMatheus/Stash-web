import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import StashStorage from './stashesOverview-components/StOv-storage/StashStorage'
import StashShop from './stashesOverview-components/StOv-shop/StashShop'
import StashStashes from './stashesOverview-components/StOv-stashes/StashStashes'

function StashesOverview() {
    return (
        <Router>
            <div className='stashesOverview'>
                <Sidebar />
                <StashStorage />
                {/* <Switch>
                    <Route exact path='/'>
                        hej
                    </Route>
                    <Route exact path='/storage'>
                        <StashStorage />
                    </Route>
                    <Route exact path='/shop'>
                        <StashShop />
                    </Route>
                </Switch> */}
            </div>
        </Router>
    )
}

export default StashesOverview
