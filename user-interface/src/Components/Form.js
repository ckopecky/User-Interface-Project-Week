import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email: '',
            select: '',
            textarea: '',
            "customer-type": ''
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSelect = (e) =>{
        this.setState({ [e.target.name]: e.target.value});
        console.log(this.state);
    }

    handleSubmit = (event) => {
        alert(`Your submitted information is: ${this.state.email}  ${this.state.select} ${this.state.textarea} ${this.state["customer-type"]}`);
        window.location.reload();
      }
    render() {
        console.log(this.state);

        return (
            <div className="form-container">
                <div className="form-field">
                    <label> <strong style={{color: 'red'}}>*</strong> Email Address</label>
                    <input onChange={this.handleChange} name="email" value={this.state.email} className="input-area" type="email" placeholder="Enter email"
                    style={{height: '40px'}}/>
                    <p>We'll never share your email with anyone else.</p>
                </div>
                <div className="form-field">
                    <label><strong style={{color: 'red'}}>*</strong> How many buildings do you need planned?
                    <select onChange={this.handleChange} name="select" value={this.state.select} style={{height: '40px', borderRadius: '0'}}>
                        <option onClick={this.handleSelect} value="one">1</option>
                        <option onClick={this.handleSelect}value="two">2</option>
                        <option onClick={this.handleSelect}value="three">3</option>
                        <option onClick={this.handleSelect}value="four-or-more">4 or More...</option>
                    </select>
                    </label>
                </div>
                <div className="form-field">
                    <label><strong style={{color: 'red'}}>*</strong> Provide a brief overview of your project needs:</label>
                    <textarea name="textarea" value={this.state.textarea}onChange={this.handleChange} className="input-area" style={{height: '200px'}}/>
                </div>
                <div className="radio-group">
                <label><strong style={{color: 'red'}}>*</strong>Which best describes your situation?<br/></label>
                <label> 
                    <input
                        onClick={this.handleSelect}
                        type="radio"
                        name="customer-type"
                        value="I am a small business"
                        className="form-check-input"
                        style={{fontWeight: 'lighter'}}
                    />
                        I am a small business
                    </label>
                    <label>
                        <input
                            onClick={this.handleSelect}
                            type="radio"
                            name="customer-type"
                            value="I am a residential owner"
                            className="form-check-input"
                        />
                    I am a residential owner
                    </label>
                    <label>
                        <input
                            onClick={this.handleSelect}
                            type="radio"
                            name="customer-type"
                            value="I am a corporation"
                            className="form-check-input"
                    />
                    I am a corporation
                    </label>
                </div>
                <input onClick={this.handleSubmit} className="submit-button" type="submit" value="Submit" />
            </div>
        );
    }
}

export default Form;