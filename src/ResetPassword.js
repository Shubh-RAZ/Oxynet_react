import React, { Component } from 'react';
import './Profile.css';

export default class ResetPassword extends Component {
    state = {  }
    render() {
        return (
        <>
            <div style={{height:'25vh'}}>

            </div>
            <div className= 'body'>
                <div className="greyHeading">Re-set Password</div>
                <br/><br/><br/>
                <div>
                    <input className="clear spl inpShadow" type="text" placeholder="Enter Password"></input>
                    <br/><br/><br/>
                </div>
                <div>
                    <input className="clear spl inpShadow" type="text" placeholder="Confirm Password"></input>
                    <br/><br/><br/>
                </div>
                <div className="center">
                    <button className="bluButton">
                        Save
                    </button>
                    <br/><br/>
                </div>
            </div>          
        </>
        );
    }
}