import React, { Component } from 'react'
import './card.css'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default class EditCard extends Component {

    render () {
        return (
         <React.Fragment>
                  <div className="col-md-3 cards" >
                        <div className="card-inside">
                            <div className="card-name">{this.props.shopName}</div>
                            <div className="card-add">{this.props.address}</div>
                            <div className="av">
                                <div className="card-avail">
                                    <div className="avail">Availaibility</div>
                                    <div className="avail"><h1>{this.props.quantity}</h1></div>
                                    <div className="avail">Last updated at: {this.props.lastUpdate}</div>
                                    <div style={{'color':'white','fontSize':'15px'}}>Oxygen Cylinders</div>
                                </div>
                            </div>
                            <div className="rate">Rs . {this.props.cost} / Cylinder</div>
                            <div className="phone">
                                <div className="phone-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" className="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                </svg></div>
                                <div className="phone-detail">
                                    <a href={`tel:`+this.props.phoneNo1}>
                                        <font style={{'color':'blue'}}>
                                            +91-{this.props.phoneNo1}
                                        </font>
                                    </a> , 
                                    <a href={`tel:`+this.props.phoneNo2}>
                                        <font style={{'color':'blue'}}>
                                            +91-{this.props.phoneNo2}
                                        </font>
                                    </a>
                                </div>    
                            </div>
                            <div className="service">
                                <button type="button" className="report-btn" onClick={this.reporthandler} style={{width:'80px'}}>Delete</button>
                                <div style={{width:'50px'}}></div>
                                <button type="button" className="report-btn" onClick={this.reporthandler} style={{width:'80px',background:'green'}}>Edit</button>
                            </div>
                            <font>
                                Reported by {this.props.reportedBy}
                            </font>
                        </div>
                    </div>
         </React.Fragment>
        )
    }
}
