import React, { Component } from 'react'
import UserServices from '../../services/UserServices';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            login: {
                mobile: '',
                password: '',
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value,
            }
        })
    }

    
    async handleSubmit(event) {
        event.preventDefault();
        const user = await UserServices.login(this.state.login);
        console.log('loginData :>> ', this.state);
        if(user.success) {
            this.props.setAuthUser();
        }
    }

    render() {
        console.log('this.state.login :>> ', this.state.login);
        return (
            <div className="login-form-background" >
                <div className="login-form">
                    <div className="card ">
                        <div className="card-header">
                            Log In 
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label className="icofont-phone" htmlFor="user_mobileno">মোবাইল নম্বর*</label>
                                    <input id="mobile" type="text" name="mobile" required autoFocus className="form-control" autoComplete="mobile" placeholder="01816*******" onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"> পাসওয়ার্ড*</label>
                                    <input type="password" className="form-control" name="password" id="exampleInputPassword1"  onChange={this.handleInputChange} placeholder="Password"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <a onClick={this.props.loginFormClose}>Close</a>
                            </form>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}
