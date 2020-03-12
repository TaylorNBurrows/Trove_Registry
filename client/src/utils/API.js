import axios from "axios";

//methods for interacting with API Auth routes
export default {
   login: userData =>
      axios.post("/auth/login", userData),
   signUp: userData =>
      axios.post('/auth/signup', userData),
   dashboard: token =>
      axios.get('/api/profile', { headers: { Authorization: `bearer ${token}` } }),
   findFriends: (search, token) => {
      return axios.get('/api/search/friends/'+ search, { headers: { Authorization: `bearer ${token}` } })
   },
   getTrove: userData =>
      axios.get('/api/trove', userData)
   getFriends: (userData, token) =>
      axios.get('/api/friends/'+ userData, { headers: { Authorization: `bearer ${token}` } } )
}