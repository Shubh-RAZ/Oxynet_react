import React, { Component } from 'react';
import './Profile.css';
import Cookies from 'universal-cookie';
import domain from './Domain';
const cookies = new Cookies();

// import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

export default class Fpw extends Component {

    constructor(props){
        super(props)

        this.state = {
            email:'',
        }
    }
    
    submit = async (event)=> {
        event.preventDefault()


        const result = await fetch(`${domain}/api/v1/users/otp/get`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "mobile" : this.state.mobile,
            })
        }).then((res) => res.json())
            // everythign went fine

            if (result.status === 'ok') {

            cookies.set('mobile', this.state.mobile)
            window.location.assign('/dashbord')
            
        } else {
            alert(result.error)
        }
    }
    
    myChangeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({[name]: val});
        console.log(this.state);
    }



    render() {
        return (
        <>
            <div style={{height:'25vh'}}  onload={this.hi}>

            </div>
            <div className= '' style={{width:'360px',padding:'20px',margin:'auto',display:'block'}}>
                <div className="greyHeading">Forget Password</div>
                <br/><br/>
                <div>
                    <input 
                        className="clear spl inpShadow" 
                        name="mobile" 
                        onChange={this.myChangeHandler} 
                        type="text" 
                        placeholder="Enter your email"
                        required="required" 
                        />
                    <br/><br/>
                </div>
                <div className="center">
                    <button className="bluButton" onClick={this.submit}>
                        Send mail
                    </button>
                    <br/><br/><br/>
                </div>
                <div className="center">
                    <a href="/signup">
                        <font style={{color: "#91919F",fontSize:"14px"}}>
                        Not with Air yet? Sign up
                        </font>
                    </a>
                </div>
            </div>          
        </>
        );
    }
}