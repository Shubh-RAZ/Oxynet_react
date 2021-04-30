import React, { Component } from 'react';
import './Profile.css';
import Cookies from 'universal-cookie';
import domain from './Domain';
import Items from './redirect'
// import GoogleLogin from 'react-google-login';

// const responseGoogle = (response) => {
//     console.log(response);
//     var id_token =response.tokenId;
//     console.log(id_token)
// }

const cookies = new Cookies();

export default class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    // a = () => console.log(':(')

    // newUser = async()=>{
    //     console.log(':(')
    //     // if (Items){
    //     //     console.log(':)');
    //     //     const result = await fetch(`${domain}/api/v1/users/login?`+Items, {
    //     //         method: 'GET',
    //     //     }).then((res) => res.json())
    //     //     if (result.status=='ok'){
    //     //         localStorage.setItem('token', result.token)
    //     //         cookies.set('token', result.token)
    //     //         window.location.replace('./dashbord')
    //     //     }
    //     // }else{console.log(':(')}
    // }

    submit = async (event)=> {
        event.preventDefault()
        const result = await fetch(`${domain}/api/v1/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "contact" : this.state.contact,
                "password" : this.state.password,
            })
        }).then((res) => res.json())

        if (result.status === 'ok') {
            localStorage.setItem('token', result.token)
            cookies.set('token', result.token)
            window.location.assign('./dashboard')
        } else {
            alert(result.error)
            console.log('error');
        }
    }
    
    myChangeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({[name]: val});
    }

    render() {

        return (
            <>
                <div style={{height:'15vh'}}>
                        <h1 style={{color:'#6F50FF',margin:'10vh 0',display:'block',fontSize:'7vh',textAlign:'center'}}>
                            Supplier Zone
                        </h1>
                </div>
                <div style={{width:'360px',margin:'auto'}}>
                <div style={{width:'100%',padding:'20px 20px',display:'block'}}>
                    <div style={{border:'1px solid blue',width:'100%',display:'flex',borderRadius:'10px'}}>
                        <svg style={{margin:'auto',paddingLeft:'10px'}} width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.33301 4.16667C2.87658 4.16667 2.49967 4.54357 2.49967 5V15C2.49967 15.4564 2.87658 15.8333 3.33301 15.8333H16.6663C17.1228 15.8333 17.4997 15.4564 17.4997 15V5C17.4997 4.54357 17.1228 4.16667 16.6663 4.16667H3.33301ZM0.833008 5C0.833008 3.6231 1.9561 2.5 3.33301 2.5H16.6663C18.0432 2.5 19.1663 3.6231 19.1663 5V15C19.1663 16.3769 18.0432 17.5 16.6663 17.5H3.33301C1.9561 17.5 0.833008 16.3769 0.833008 15V5Z" fill="#6360FF"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.983719 4.52251C1.24765 4.14547 1.76726 4.05378 2.1443 4.3177L9.99975 9.81652L17.8552 4.3177C18.2322 4.05378 18.7518 4.14547 19.0158 4.52251C19.2797 4.89955 19.188 5.41916 18.811 5.68309L10.4776 11.5164C10.1907 11.7173 9.80879 11.7173 9.52186 11.5164L1.18853 5.68309C0.811486 5.41916 0.719791 4.89955 0.983719 4.52251Z" fill="#6360FF"/>
                        </svg>
                        <input name='contact' className="none" placeholder='e-mail' style={{width:'100%',fontSize:'12px',borderRadius:'10px',textAlign:'left',padding:'10px',background:'white'}} onChange={this.myChangeHandler}></input>
                    </div>
                </div>
                <div style={{width:'100%',display:'flex',padding:'20px 20px',}}>
                    <div style={{border:'1px solid blue',width:'100%',display:'flex',borderRadius:'10px'}}>
                        <svg style={{margin:'auto',paddingLeft:'10px'}} width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.16699 9.99967C3.70675 9.99967 3.33366 10.3728 3.33366 10.833V16.6663C3.33366 17.1266 3.70675 17.4997 4.16699 17.4997H15.8337C16.2939 17.4997 16.667 17.1266 16.667 16.6663V10.833C16.667 10.3728 16.2939 9.99967 15.8337 9.99967H4.16699ZM1.66699 10.833C1.66699 9.4523 2.78628 8.33301 4.16699 8.33301H15.8337C17.2144 8.33301 18.3337 9.4523 18.3337 10.833V16.6663C18.3337 18.0471 17.2144 19.1663 15.8337 19.1663H4.16699C2.78628 19.1663 1.66699 18.0471 1.66699 16.6663V10.833Z" fill="#6360FF"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 2.49967C9.11594 2.49967 8.2681 2.85086 7.64298 3.47599C7.01786 4.10111 6.66667 4.94895 6.66667 5.83301V9.16634C6.66667 9.62658 6.29357 9.99967 5.83333 9.99967C5.3731 9.99967 5 9.62658 5 9.16634V5.83301C5 4.50693 5.52678 3.23516 6.46447 2.29747C7.40215 1.35979 8.67392 0.833008 10 0.833008C11.3261 0.833008 12.5979 1.35979 13.5355 2.29747C14.4732 3.23516 15 4.50693 15 5.83301V9.16634C15 9.62658 14.6269 9.99967 14.1667 9.99967C13.7064 9.99967 13.3333 9.62658 13.3333 9.16634V5.83301C13.3333 4.94895 12.9821 4.10111 12.357 3.47599C11.7319 2.85086 10.8841 2.49967 10 2.49967Z" fill="#6360FF"/>
                        </svg>
                        <input name='password' className="none" placeholder='Password' style={{width:'100%',fontSize:'14px',borderRadius:'10px',textAlign:'left',padding:'10px',background:'white'}} type='password' onChange={this.myChangeHandler}></input>
                    </div>
                </div>
                <div style={{textAlign:'right',padding:'10px 20px'}}>
                    <a href="./Fpw">
                        <button type='button' style={{fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '17px', color: '#91919F'}}>Forgot Password?</button>
                    </a>
                </div>
                <div style={{padding:'0 20px'}}>
                    <button className="bluButton" onClick={this.submit} style={{width:'100%'}} onClick={this.submit}>Sign In</button>
                </div>
                <br/>
                <div style={{padding:'0'}}>
                    <hr style={{width:'50%',textAlign:'center'}}/>
                </div>
                <a href="./signup">
                    <button type='button' style={{fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px', lineHeight: '17px', color: '#91919F'}}>
                        <font style={{fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: 500, fontSize: '14px', lineHeight: '17px', color: '#91919F'}}>
                            New user? SignUp here
                        </font>
                    </button>
                </a>
                </div>
            </>
        );
    }
}