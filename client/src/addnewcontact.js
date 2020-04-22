import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addContact } from './actions/actions'

class AddContact extends Component {
  constructor(props){
      super(props);
      this.state={
          name:"",
          email:"",
          phone:""
      }

    }
    handlechange= e => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <header>

                <div>
                    <label>Name:</label>
                    <input type='text'   name='name' onChange={this.handlechange}></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type='text' name='email' onChange={this.handlechange}></input>
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name='phone'   onChange={this.handlechange}  ></input>
                </div>
                <div>
                    <button onClick={()=> this.props.addContact(this.state)}>Add</button>
                    <button>Cancel</button>
                </div>
            </header>
        )


    }


}
export default connect (null, {addContact})(AddContact)