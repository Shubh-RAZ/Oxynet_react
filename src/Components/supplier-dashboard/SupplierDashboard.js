import React, { Component } from 'react'
import './SupplierDashboard.css'
import SupplyTop from '../SupplyTop'
import Card from '../card';
import SupplierForm from '../SupplierForm/SupplierForm';

export default class SupplierDashboard extends Component {
    
    constructor(props){
        super(props)
        this.state = {
        showform:false
    }
}

handleform = () => {
    this.setState({
        showform:true
    })
}
handlecancel = () => {
    this.setState({
        showform:false
    })
}

    render() {
        console.log(this.state.showform)
        return (
            <div className="dashboard-whole"  style={{background: this.state.showform ? 'grey' : 'white'}}>
                <SupplyTop></SupplyTop>
                <div className="supply_start">
               {this.state.showform ? <div className="cancel-svg" onClick={this.handlecancel}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg></div> : null }

              
                 {this.state.showform ? <SupplierForm></SupplierForm> : <div className="row row-class">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <div className="col-md-6 btn-box">
                    <div className="inside-btn">
                    <div className="add-btn" onClick={this.handleform}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    </div>
                    </div>
                 
                    </div>
                 
                    </div>
    }
                </div>
        
            </div>
        )
    }
}
