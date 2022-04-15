import Navbar from "../../components/Navbar";
import {
    TextField,
    IconButton,
    InputAdornment,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemAvatar,
    Avatar
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./HomePage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImageIcon from '@mui/icons-material/Image';

/**{
    "login": "john",
    "id": 1668,
    "node_id": "MDQ6VXNlcjE2Njg=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1668?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/john",
    "html_url": "https://github.com/john",
    "followers_url": "https://api.github.com/users/john/followers",
    "following_url": "https://api.github.com/users/john/following{/other_user}",
    "gists_url": "https://api.github.com/users/john/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/john/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/john/subscriptions",
    "organizations_url": "https://api.github.com/users/john/orgs",
    "repos_url": "https://api.github.com/users/john/repos",
    "events_url": "https://api.github.com/users/john/events{/privacy}",
    "received_events_url": "https://api.github.com/users/john/received_events",
    "type": "User",
    "site_admin": false,
    "score": 1
} */
export default function HomePage() {
    const [searchedUser, setSearchedUser] = useState(localStorage.getItem("searchedUser") || "");
    const [users, setUsers] = useState([]);

    const handleSearchFieldChange = (event) => {
        setSearchedUser(event.target.value);
        localStorage.setItem("searchedUser", event.target.value);
    }

    const handleSearchClick = async () => {
        const response = await fetch(`https://api.github.com/search/users?q=${searchedUser}`);
        const jsonResponse = await response.json();
        setUsers(jsonResponse.items);
    }

    return (
        <div className="git__home-page">
            <Navbar />
            <TextField
                className="search-field"
                label="Search user"
                type="search"
                value={searchedUser}
                onChange={handleSearchFieldChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                type="submit"
                                sx={{ p: '10px' }}
                                aria-label="search"
                                onClick={handleSearchClick}
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            <List>
                {users.map((user) => {
                    return (
                        <ListItem key= {user.id} disablePadding sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
                            <Link
                                to={`/user/${user.login}`}
                                className="user-link"
                            >
                                <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar>
                                                     <Avatar alt="UserImg" src={user.avatar_url} />   
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={user.login} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    );
}