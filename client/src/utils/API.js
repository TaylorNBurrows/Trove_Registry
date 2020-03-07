import axios from "axios";

//methods for interacting with API Auth routes
export default {
  login: userData => 
     axios.post("/auth/login",  userData),
  signUp: userData => 
  	 axios.post('/auth/signup', userData),
  dashboard: token =>
     axios.get('/api/profile', {headers: {Authorization: `bearer ${token}`}}),
   getFriends: token =>
      axios.get('/api/friends', {headers: {Authorization: `bearer ${token}`}})
};
