import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import StashStorage from './stashesOverview-components/StOv-storage/StashStorage'
import StashShop from './stashesOverview-components/StOv-shop/StashShop'
import StashStashes from './stashesOverview-components/StOv-stashes/StashStashes'
import StashAnalytics from './stashesOverview-components/StOv-analytics/StashAnalytics'

function StashesOverview() {
    return (
        <Router>
            <div className='stashesOverview'>
                <Switch>
                    <Route exact path='/'>
                        <Sidebar />
                        <StashAnalytics />
                    </Route>
                    <Route exact path='/storage'>
                        {/* <Sidebar /> */}
                        <StashStorage />
                    </Route>
                    <Route exact path='/shop'>
                        <Sidebar />
                        <StashShop />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default StashesOverview
