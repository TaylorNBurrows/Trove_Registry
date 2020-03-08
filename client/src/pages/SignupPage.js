import React, { useEffect, useState, useHistory } from 'react';
import SignUpForm from '../components/SignUpForm';
import API from '../utils/API';

const SignUpPage = (props) => {
  // set the initial component state
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    username: '',
    name: '',
    email: '',
    password: ''
  })

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  let history = useHistory
  const processForm = (event) => {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const { username, name, email, password } = user;

    //const formData = `email=${email}&password=${password}`;
    API.signUp({ username, name, email, password }).then(res => {
      // change the component-container state
      // set a message
      localStorage.setItem('successMessage', res.data.message);

      // redirect user after sign up to login page
      props.history.push('/login');
      setErrors({
        errors: {},
      });

    }).catch(({ response }) => {
      console.log(response)
      const errors = response.data.errors ? response.data.errors : {};
      errors.summary = response.data.message;

      setErrors(
        errors
      );
    });
  }

  useEffect(() => {
    return () => {
      setErrors({
        errors: {}
      })
    }
  }, [])

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  const changeUser = (e) => setUser(
    {
    ...user,
    
    [e.target.name]: e.target.value,
  });

  /**
   * Render the component.
   */

  return (
    <SignUpForm
      onSubmit={processForm}
      onChange={changeUser}
      errors={errors}
      user={user}
    />
  );


}

export default SignUpPage;