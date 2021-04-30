import React, { Component } from 'react'
import './SupplyTop.css'

export default class SupplyTop extends Component {

    state = {
        title:'Dashboard'
    }
    render() {
        return (
            <div className="supply_top_whole">
                <div className="supply_name " style={{'margin':'auto'}}>OXYNET</div>
                <div className="supply_title " style={{'margin':'auto'}}>{this.state.title}</div>
                <div className="lgt_btn " style={{'margin':'auto'}}>Logout</div>
            </div>
        )
    }
}