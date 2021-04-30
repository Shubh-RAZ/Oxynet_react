import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import  { Component } from 'react'

export default class Alert extends Component {

  handleClickDelete=()=>{
    alert('hi')
}

  submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      childrenElement: () => <div />,
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Are you sure?</h1>
            <p>You want to delete this file?</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                this.handleClickDelete();
                onClose();
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      },
      closeOnEscape: true,
      closeOnClickOutside: true,
      willUnmount: () => {},
      afterClose: () => {},
      onClickOutside: () => {},
      onKeypressEscape: () => {},
      overlayClassName: "alert"
    })
  };

  render() {
    return (
      <div className='container'>
        <button onClick={this.submit}>Confirm dialog</button>
      </div>
    );
  }
}
