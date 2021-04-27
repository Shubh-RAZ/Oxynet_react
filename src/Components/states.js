import React, { Component } from 'react'
import "./options.css"

const states = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh (UT)','Chhattisgarh','Dadra and Nagar Haveli (UT)','Daman and Diu (UT)','Delhi (NCT)','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Lakshadweep (UT)','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry (UT)','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal']

export default class States extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state:'',
        }
    }

    myChangeHandler = async(event) => {
        let name = event.target.name;
        let val = event.target.value;
        await this.setState({[name]: val});
        console.log(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <select name="state" id="state" className="select" defaultValue="" onChange={this.myChangeHandler}>
                    <option value="" disabled >Select state</option>
                    {states.map((state,index) => (<option key={index} name={state}>{state}</option>))}
                </select>
            </React.Fragment>
        )
    }
}
