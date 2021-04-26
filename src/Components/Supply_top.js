import React, { Component } from 'react'
import './Supply_top.css'

export default class Supply_top extends Component {

    state = {
        title:'Supplier Dashboard'
    }
    render() {
        return (
            <div className="supply_top_whole">
                <div className="supply_name">OXYNET</div>
                <div className="supply_title">{this.state.title}</div>
                <div className="lgt_btn">Logout</div>
            </div>
        )
    }
}
