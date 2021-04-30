import React, { Component } from 'react';
import './Profile.css';
import Cookies from 'universal-cookie';
import domain from './Domain';
import Items from './redirect'

const cookies = new Cookies();

export default class Login extends Component {

    newUser= async()=>{
        if (Items){
            const result = await fetch(`https://oxynet.herokuapp.com/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => res.json())
            if (result.status=='ok'){
                localStorage.setItem('token', result.token)
                cookies.set('token', result.token)
                window.location.replace('./')
            }
        }
    }    

    render() {

        return (
            i
        )
    }
}