import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    render() {
        return (
            <div className="form-container">
                <div className="form-field">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter email"/>
                    <p>We'll never share your email with anyone else.</p>
                </div>
                <div className="form-field">
                    <label>How many buildings do you need planned?
                    <select>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option selected value="three">3</option>
                        <option value="more">4 or More...</option>
                    </select>
                    </label>
                </div>
                <div className="form-field">
                    <label>Provide a brief overview of your project needs:</label>
                    <textarea />
                </div>
                <div className="radio-group">
                <label>
                    <input
                        type="radio"
                        name="customer-type"
                        value="I am a small business"
                        className="form-check-input"
                />
                I am a small business
                </label>
                <label>
                    <input
                        type="radio"
                        name="customer-type"
                        value="I am a residential owner"
                        className="form-check-input"
                />
                I am a residential owner
                </label>
                <label>
                    <input
                        type="radio"
                        name="customer-type"
                        value="I am a corporation"
                        className="form-check-input"
                />
                I am a corporation
                </label>
                </div>
                <input type="submit" value="Submit" />
            </div>
        );
    }
}

export default Form;