import axios from "axios";

//methods for interacting with API Auth routes
export default {
  login: userData => 
     axios.post("/auth/login",  userData),
  signUp: userData => 
  	 axios.post('/auth/signup', userData),
  dashboard: token =>
     axios.get('/api/profile', {headers: {Authorization: `bearer ${token}`}}),
   findFriends: userData =>
      axios.get('/api/search/friends', userData)
};
