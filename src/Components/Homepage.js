import React, { Component } from 'react'
import Card from './card'
import './Homepage.css'
import States from './states.js'
import District from './districts'

const response = [
    {
    Id : 'hi',
    quantity:'hi',
    shopName:'hi',
    address:'hi',
    cost:'hi',
    phoneNo1:'hi',
    phoneNo2:'hi'
    },

    {
    Id : 'hi2',
    quantity:'hi2',
    shopName:'hi2',
    address:'hi2',
    cost:'hi2',
    phoneNo1:'hi2',
    phoneNo2:'hi2'
    }

]

export default class Homepage extends Component {

    handleChange = (event) => {
        // let name = event.target.name;
        // let val = event.target.value;
        // this.setState({[name]: val});
        console.log(this.state);
    }

    render() {
        return (
            <div className="homepage-whole">
                <div className="top-ribbon">
                    <div className="name">Oxynet</div>
                    <div className="state-city">
                        <div className="state">
                            <div className="svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                            <States />
                        </div>

                        <div className="state city">
                            <div className="svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                            <District name={"Goa"} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="supplier">
                    <div className="supplier-heading">OXYGEN CYLINDERS</div>
                    <div className="supplier-info">
                        <div className="supplier-quote">Are you a supplier ?</div>
                        <div className="click-here-btn">Click Here</div>
                    </div>

                </div>

                <div className="card-start">
                    <div className="row">
                        {response.map((obj,index)=>{
                            return(
                                <Card  
                                    key={index}
                                    Id={obj.Id} 
                                    quantity={obj.quantity} 
                                    shopName={obj.shopName} 
                                    address={obj.address} 
                                    cost={obj.cost} 
                                    phoneNo1={obj.phoneNo1} 
                                    phoneNo2={obj.phoneNo2}
                                />
                            )
                        })}
                        {/* <Card _Id={'3893e8993e83'} quantity={'hlo'} shopName={'hlo'} address={'hlo'} cost={'hlo'} phoneNo1={'hlo'} phoneNo2={'hlo'}/> */}
                    </div>
                </div>
            </div>
        )
    }
}

// example card
// {/* <Card  key={index} 
//                                 quantity={response.quantity} 
//                                 shopName={response.shopName} 
//                                 address={response.address} 
//                                 cost={response.cost} 
//                                 phoneNo1={response.phoneNo1} 
//                                 phoneNo2={response.phoneNo2}/> */}