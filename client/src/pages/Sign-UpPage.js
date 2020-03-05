import React, { useState } from 'react'
import SignUpForm from "../components/SignUpForm"
import PropTypes from 'prop-types';
import API from '../utils/API';

const SignupPage = () => {

    const [formState, setFormState] = useState({
        errors: {},
        user: {
            username: "",
            name: "",
            email: "",
            password: ""
        }

    });

    const processForm = (event) => {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();

        // create a string for an HTTP body message
        const { username, name, email, password } = formState.user;

        //const formData = `email=${email}&password=${password}`;
        API.signUp({ username, name, email, password }).then(res => {
            // change the component-container state
            // set a message
            localStorage.setItem('successMessage', res.data.message);

            // redirect user after sign up to login page
            this.props.history.push('/login');
            setFormState({ ...formState, errors: {} });

        }).catch(({ response }) => {

            const errors = response.data.errors ? response.data.errors : {};
            errors.summary = response.data.message;

            setFormState({ ...formState, errors });
        });
    }

    const changeUser = event => {
        const field = event.target.name;
        const user = formState.user;
        user[field] = event.target.value;

        console.log(user)
    
        setFormState({ ...formState, user });
      }

    return (
<SignUpForm
        onSubmit={processForm}
        onChange={changeUser}
        errors={formState.errors}
        user={formState.user}
      />
    )
}
SignupPage.contextTypes = {
    router: PropTypes.object.isRequired
  };

export default SignupPage;