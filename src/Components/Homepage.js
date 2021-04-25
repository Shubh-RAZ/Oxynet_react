import React, { Component } from 'react'
import Card from './card'
import './Homepage.css'
import Options from './options.js'

export default class Homepage extends Component {
    render() {
        return (
            <div className="homepage-whole">
                <div className="top-ribbon">
                    <div className="name">Oxynet</div>
                    <div className="state-city">
                    <div className="state">
                        <div className="svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </div>
                        <Options></Options>
                    </div>

                    <div className="state city">
                        <div className="svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </div>
                    <Options></Options>
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
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    
                    </div>
                </div>
            </div>
        )
    }
}
