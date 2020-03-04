import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'

const SignupPage = () => {

    const [formState, setFormState] = useState({
        username: "",
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({...formState, [name]: value});
    }

    const handleSubmit = (event) => {
        console.log('sign-up handleSubmit, username: ')
        console.log(formState.username)
        event.preventDefault()

        //request to server to add a new username/password
        axios.post('/auth/signup', {
            username: formState.username,
            name: formState.name,
            email: formState.email,
            password: formState.password
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('successful signup')
                    const { useHistory } = this.props.useHistory;
                    useHistory.push('/login')
                } else {
                    console.log('username already taken')
                }
            }).catch(error => {
                console.log('signup error: ')
                console.log(error)
            })
    }


    return (

        <div>
            <h1>Hello Signup Page</h1>
            <div className="SignupForm">
                <h4>Sign up</h4>
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="username">Username</label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input className="form-input"
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                value={formState.username}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="name">Name</label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input className="form-input"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formState.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="email">Email</label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input className="form-input"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="email"
                                value={formState.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="password">Password: </label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input className="form-input"
                                placeholder="password"
                                type="password"
                                name="password"
                                value={formState.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="col-7"></div>
                        <button
                            className="btn btn-primary col-1 col-mr-auto"
                            onClick={handleSubmit}
                            type="submit"
                        >Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupPage;