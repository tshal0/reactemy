
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Login">
                        </AppBar>
                        <TextField
                            hintText = "Enter your Username"
                            floatingLabelText = "Username"
                            onChange= {(event, newValue) => 
                            this.setState({username:newValue})}
                        /><br/>
                        <TextField
                            hintText = "Enter your password"
                            floatingLabelText = "Password"
                            onChange= {(event, newValue) => 
                            this.setState({password:newValue})}
                        /><br/>
                        <RaisedButton 
                            label="Submit"
                            primary={true}
                            style={style}
                            onClick={(event) => this.handleClick(event)}
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        )
    } // render()

    handleClick(event) {
        var apiBaseURL = "http://localhost:8080/api/";
        var self = this;
        var payload = {
            "email" : this.state.username,
            "password" : this.state.password
        }

        axios.get(apiBaseURL + 'login', payload)
        .then(function(response){
            console.log(response);

            var uploadScreen = [];

        })
    }

}

const style={margin: 15,};
export default Login;