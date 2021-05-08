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
                        <textarea maxLength="200" type="text" className="reason" id="reason"></textarea>
                    </div>
                </form>
                <button className="form-report-submit"> Submit </button>
                </div>
            </div>
        )
    }
}
