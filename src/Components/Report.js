import React, { Component } from 'react'
import './Report.css'

export default class Report extends Component {
    render() {
        return (
            <div className="report-whole">
             
                <div className="inside-form">
                   <div className="form-head"> Report </div>
                <form>
                    <div className="form-group">
                        <label  className="label-class" for="email">Email</label>
                        <input type="text" className="form-control" id="email" ></input>
                    </div>
                    <div className="form-group">
                        <label  className="label-class" for="reason">Reason</label>
                        <input type="text" className="reason" id="reason"></input>
                    </div>
                </form>
                <div className="form-report-submit"> Submit </div>
                </div>
            </div>
        )
    }
}
