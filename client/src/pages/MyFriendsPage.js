import React, {useState} from 'react'
import Main from '../components/Main'
import SearchBar from '../components/SearchBar'
import FriendTable from '../components/FriendTable'
import API from '../utils/API'

const MyFriendsPage = () => {

    const [search, setSearch] = useState('');

    const onChange = (e) => setSearch({
        ...search,
        [e.target.name]: e.target.value,
      });

    const onSearch = () => {
        API.findFriends(search).then((err, res) =>{
            if(err) throw err;
            console.log()
        })
    }

    return (
        <div>
            <Main>
                <SearchBar onChange={onChange} onSearch={onSearch}/>
                <FriendTable />
            </Main>
        </div>

    )
}

export default MyFriendsPage