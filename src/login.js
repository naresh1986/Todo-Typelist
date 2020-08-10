import React, { Component } from 'react'
import creds from './credentials'


class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleLogin = () => {

        let user = {
            username: this.state.username,
            password: this.state.password
        }
        if (user.username === creds.ADMIN && user.password === creds.ADMIN_PASSWORD) {
            sessionStorage.setItem('ROLE', creds.ROLE)
            window.location.href='/home'
        }
        else if(user.username === creds.USER && user.password === creds.USER_PASSWORD){
            sessionStorage.setItem('ROLE', 'USER')
            window.location.href='/home'
        }else{
            window.location.href='/'
        }
    }
    render() {

        return <div className="form" style={{marginLeft:'550px',marginTop:'150px'}}>
            <div className="col-md-4">
                <h3>Login</h3>
                <div className="form-group">
                    <label >username</label>
                    <input type="text" name="username" className="form-control" value={this.state.username}
                        onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <label>password</label>
                    <input type="password" name="password" className="form-control" value={this.state.password}
                        onChange={this.handleInputChange} />
                </div>

                <div className="form-group">
                    <button type="button" className="btn btn-success" onClick={this.handleLogin}>Login</button>

                </div>

            </div>
        </div>

    }
}

export default Login