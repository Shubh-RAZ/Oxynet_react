import React, { Component } from 'react';
import './Profile.css';
import './main.css';
import Cookies from 'universal-cookie';
import domain from './Domain';

const cookies = new Cookies();

export default class Signup_P extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            passwordConfirm:'',
            mobile:'',
            disabled :false
        }
    }

    submit = async (event)=> {
        event.preventDefault()
        this.setState({disabled:true})
        if (this.state.password==this.state.passwordConfirm){
            const result = await fetch(`https://oxynet.herokuapp.com/api/v1/users/signup/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email" : this.state.email,
                    "password" : this.state.password,
                    "name" : this.state.name,
                    "mobile" : this.state.mobile,
                })
            }).then((res) => res.json())
    
            if (result.status === 'ok') {
                // everythign went fine
                // console.log('Got the token: ', result.data)
                localStorage.setItem('token', result.data)
                localStorage.setItem('Id', result.Id)
                alert('One time link sent to '+ this.state.email)
            } else {
                alert(result.error)
            }
        }else{
            alert('Passwords do not match')
        }
    }
    
    myChangeHandler = async (event) => {
        this.setState({disabled:false})
        let name = event.target.name;
        let val = event.target.value;
        await this.setState({[name]: val});
        console.log(this.state);
    }


    render() {
        return (
        
            <div>
            <div style={{width:'360px',padding:'20px',margin:'auto',display:'block'}}>
            <form onSubmit={this.submit}>
            <div className="">
                <div style={{height: '8vh'}}></div>
                <h2 className="text center">
                    Let’s Get Started
                </h2>
                <br/>
            </div>
            <div className="">
                <div style={{padding:"0 0vh 0 0vh"}}>
                    <input
                        required 
                        onChange={this.myChangeHandler} 
                        className="clear" 
                        type="text" 
                        placeholder="Name"
                        name="name" 
                        style={{padding:"2vh 2vw",textAlign:"left",width:"100%"}}
                    />
                    <div style={{height:"5vh"}}></div>
                </div>
                <div style={{padding:"0 0vh 0 0vh"}}>
                    <input
                        required 
                        onChange={this.myChangeHandler} 
                        className="clear" 
                        type="number" 
                        minLength="10"
                        maxLength="10"
                        placeholder="Mobile Number"
                        name="mobile" 
                        style={{padding:"2vh 2vw",textAlign:"left",width:"100%"}}
                    />
                    <div style={{height:"5vh"}}></div>
                </div>
                <div style={{padding:"0 0vh 0 0vh"}}>
                    <input
                        required 
                        onChange={this.myChangeHandler} 
                        className="clear" 
                        type="email" 
                        placeholder="Email" 
                        name="email" 
                        style={{padding:"2vh 2vw",textAlign:"left",width:"100%"}}
                    />
                    <div style={{height:"5vh"}}></div>
                </div>
                <div style={{padding:"0 0vh 0 0vh"}}>
                    <input
                        required 
                        onChange={this.myChangeHandler} 
                        className="clear" 
                        type="password" 
                        placeholder="Set Password"
                        name="password" 
                        style={{padding:"2vh 2vw",textAlign:"left",width:"100%"}}
                    />
                    <div style={{height:"5vh"}}></div>
                </div>
                <div style={{padding:"0 0vh 0 0vh"}}>
                    <input
                        required 
                        onChange={this.myChangeHandler} 
                        className="clear" 
                        type="password" 
                        placeholder="Confirm Password"
                        name="passwordConfirm" 
                        style={{padding:"2vh 2vw",textAlign:"left",width:"100%"}}
                    />
                    <div style={{height:"5vh"}}></div>
                </div>
                <button type='submit' className="bluButton signup" style={{width:'100%'}} disabled={this.state.disabled}>Submit</button>

                <a href="./terms">
                    <button type='button' style={{fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '17px', color: '#91919F'}}>
                        <font style={{fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 500, fontSize: '10px', lineHeight: '17px', color: '#91919F',textAlign:'left'}}>
                            by creating account you accept our <font style={{color:'blue'}}>terms and conditions</font>
                        </font>
                    </button>
                </a>

                {/* <div style={{height:"1vh"}}></div>
                <div style={{textAlign:"center"}}>
                    <font style={{color:'#76758D'}}><b>OR</b></font>
                </div>
                <div style={{height:"1vh"}}></div> */}
                        {/* <button type="button" className="bluButton click" style={{day: 'inline',width:'100%',padding: '1vh 12vw', borderRadius: '6px',background: '#FFFFFF', border: '0.5px solid #5977FD', boxSizing: 'border-box', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)'}}> 
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.685 10.2222C18.685 9.39994 18.6223 8.79995 18.4866 8.17773H9.66504V11.8888H14.8431C14.7387 12.811 14.175 14.1999 12.9222 15.1332L12.9047 15.2574L15.6939 17.5572L15.8871 17.5777C17.6618 15.8332 18.685 13.2666 18.685 10.2222Z" fill="#4285F4"/>
                                <path d="M9.66504 19.9998C12.2019 19.9998 14.3315 19.1108 15.8871 17.5775L12.9222 15.133C12.1288 15.7219 11.0639 16.133 9.66504 16.133C7.18041 16.133 5.0716 14.3886 4.31987 11.9775L4.20968 11.9875L1.30941 14.3764L1.27148 14.4886C2.81655 17.7552 5.99023 19.9998 9.66504 19.9998Z" fill="#34A853"/>
                                <path d="M4.32011 11.9782C4.12176 11.356 4.00696 10.6893 4.00696 10.0005C4.00696 9.31153 4.12176 8.64489 4.30967 8.02268L4.30442 7.89016L1.3678 5.46289L1.27172 5.51153C0.634926 6.8671 0.269531 8.38936 0.269531 10.0005C0.269531 11.6116 0.634926 13.1337 1.27172 14.4893L4.32011 11.9782Z" fill="#FBBC05"/>
                                <path d="M9.66506 3.86664C11.4293 3.86664 12.6194 4.67775 13.2981 5.35557L15.9497 2.6C14.3212 0.988894 12.2019 0 9.66506 0C5.99024 0 2.81655 2.24443 1.27148 5.51107L4.30944 8.02222C5.0716 5.61111 7.18042 3.86664 9.66506 3.86664Z" fill="#EB4335"/>
                            </svg>
                            <font style={{fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 'bold', fontSize: '14px', lineHeight: '17px', color: '#A7A7CF',position:'relative',top:'-5px',left:'10px'}}>
                                Sign In with Google
                            </font> 
                        </button> */}
                {/* <div style={{height:"5vh"}}></div> */}
            </div>
            </form>
        </div>

            </div>
        
            );
    }
}