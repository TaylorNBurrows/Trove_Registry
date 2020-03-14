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
      return axios.get('/api/search/friends/' + search, { headers: { Authorization: `bearer ${token}` } })
   },
   getTrove: (userData, token) => {
      console.log("Big API", userData)
      return axios.get('/api/user/trove/' + userData, { headers: { Authorization: `bearer ${token}` } })
   },
   addTrove: (userData, troveData) => {
      return axios.post("/auth/trove/" + userData, { body: troveData })
   },
   editTrove: (troveId, troveData) => {
      return axios.put("/auth/trove/" + troveId, { body: troveData })
   },
   getFriends: (userData, token) =>
      axios.get('/api/friends/' + userData, { headers: { Authorization: `bearer ${token}` } }),
   addFriend: (userData) => {
      return axios.put("/auth/friends/" + userData.id + "/" + userData.friend)
   },
   updateUser: (userData, token) => {
      axios.put('/auth/profile' + userData, { headers: { Authorization: `bearer ${token}` }, body: userData })

   }
}