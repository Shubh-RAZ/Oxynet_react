import React, { Component } from 'react'
import './SupplierForm.css'

export default class SupplierForm extends Component {
    handlecancel = () => {
        localStorage.setItem('bool',false)
    }
    render() {
        return (
            <div className="supplier-form-whole">
    <div className="form-inside">
                   
                    <div className="select-field">
                    <select name="state" id="state" className="select-supply" placeholder="Select State" defaultValue="">
                        <option value="" disabled >Select Your Item</option>
                            <option value="Andhra Pradesh">Oxygen Cylinder</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <input type="text" className="in-input" placeholder="Quantity (eg. 100 Oxygen Cylinders)"></input>
                    </div>
                    <div className="input-field">
                        <input type="text" className="in-input" placeholder="Cost (MRP) per cylinder"></input>
                    </div>
                    <div className="input-field">
                        <input type="text" className="in-input" placeholder="10 digit Phone Number"></input>
                    </div>
                    <div className="input-field">
                        <input type="text" className="in-input" placeholder="Alternate Phone Number"></input>
                    </div>
                    <div className="input-field">
                        <input type="text" className="in-input" placeholder="Shop Name"></input>
                    </div>
                    <div className="input-field">
                        <input type="text" className="in-input" placeholder="Shop Address"></input>
                    </div>
                    <div className="input-field">
                        <input type="text" className="in-input" placeholder="State"></input>
                    </div>
                    <div className="input-field">
                        <input type="text" className="in-input" placeholder="City"></input>
                    </div>
                    <div className="save-btn">
                       Save
                    </div>
                </div>
                
            </div>
        )
    }
}
