import React from 'react'
import Graph from './analytics-components/Graph'
import AnalyticsHeader from './analytics-components/AnalyticsHeader'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'

function StashAnalytics() {
    return (
        <div className='dashboard'>
            <AnalyticsHeader />
            <div className='quickShowContainer'>
                <div className='quickShowItem'>
                    <div className='quickShowItem-icon'>
                        <EqualizerIcon />
                    </div>
                    <div className='quickShowItem-text'>
                        <h4>10 847</h4>
                        <p>Products</p>
                    </div>
                    <div className='quickShowItem-graph'>+ 2.1%</div>
                </div>
                <div className='quickShowItem'>
                    <div className='quickShowItem-icon'>
                        <ShoppingCartIcon />
                    </div>
                    <div className='quickShowItem-text'>
                        <h4>64 870</h4>
                        <p>Visitors</p>
                    </div>
                    <div className='quickShowItem-graph red'>- 4.5%</div>
                </div>
                <div className='quickShowItem'>
                    <div className='quickShowItem-icon'>
                        <PeopleAltIcon />
                    </div>
                    <div className='quickShowItem-text'>
                        <h4>447</h4>
                        <p>Visitors</p>
                    </div>
                    <div className='quickShowItem-graph'>+ 3.4%</div>
                </div>
            </div>

            {/* Graph */}

            <div className='analytics-graph'>
                <Graph />
            </div>
        </div>
    )
}

export default StashAnalytics
