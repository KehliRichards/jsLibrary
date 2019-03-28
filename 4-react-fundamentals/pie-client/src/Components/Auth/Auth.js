import React from 'react';
import './Auth.css';


class Auth extends React.Component {

    state = {
        login: true,
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    };

    loginToggle = (event) => {
        event.preventDefault();

        const login = this.state.login;
        this.setState({
            login : !login,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    };

    render() {

        let title = this.state.login ? 'Login' : 'Sign Up';

        let signupFields = !this.state.login ? (
            <div>
                <label className="display-block" htmlFor="firstName">First Name:</label>
                <input className="display-block" type="text" name="firstName" value={this.state.firstName} onChange={(e) => this.handleChange(e)} />
                <label className="display-block" htmlFor="lastName">Last Name:</label>
                <input className="display-block" type="text" name="lastName" value={this.state.lastName} onChange={(e) => this.handleChange(e)} />
            </div>
        ) : null;

        return(
            <form className="card-like" onSubmit={this.handleSubmit}>
                <h1>{ title }</h1>
                <label className="display-block" htmlFor="email">Email:</label>
                <input className="display-block" type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
                <label className="display-block" htmlFor="password">Password:</label>
                <input className="display-block" type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
                { signupFields }
                <button onClick={(e) => this.loginToggle(e)}>Login/Sign Up</button>
                <button type="submit">Submit</button>
            </form>
        )
    }
};

export default Auth;