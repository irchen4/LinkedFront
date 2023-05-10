import React from 'react';
import MediaQuery from 'react-responsive'
import Button from 'react-bootstrap/esm/Button';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import {Projects} from './projects';
import ProfileCard from '../components/pages/profile';
import SingleProject from '../components/pages/single_project';
import UserForm from '../components/pages/user_form';
import SignUp from './pages/signup';
import Inbox from '../components/pages/inbox';
import AddProject from '../components/pages/add_project';
import Logout from '../components/pages/logout';
import EditProfile from '../components/pages/edit_profile';
import AdminPanel from '../components/pages/admin_panel';
import Message from '../components/pages/message';

    export default function NavBar() {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const [anchorE2, setAnchorE2] = React.useState(null);
    
    
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleMenuClick = (event) => {
            setAnchorE2(event.currentTarget);
        }
        const handleClose = () => {
            setAnchorEl(null);
            setAnchorE2(null);
        };

    return(
    <div>
        <header> 
            <nav> 
                <a id="logo" href="#">LinkedMin</a>  
                <div id="menu">
                   <Button class="link" onClick={handleMenuClick} href="profiles">DevOps</Button> 
                    <Button class="link" onClick={handleMenuClick} href="/">Projects</Button>
                    <Button class="link"onClick={handleMenuClick} href="inbox">Inbox</Button>
                    <Button class="link" onClick={handleMenuClick} href="add_project">Add Project</Button>
                    <Button class="link" onClick={handleMenuClick} href="user_form">Account</Button>
                    <Button class="link" onClick={handleMenuClick} href="admin_panel">Dashboard</Button>
                    <Button class="btn" onClick={handleMenuClick} href="logout">LogOut</Button>
                    <Button onClick={handleMenuClick} class="btn" href="sign_up">SignUp / LogIn</Button>
                </div>    
                    
            </nav> 
    </header>

    <Router>
            <Routes>
                <Route exact path='/' element={<Projects />} />
                <Route path='profiles' element={<ProfileCard/>} />
                <Route path='user_form' element={<UserForm/>} />
                <Route path='single_project' element={<SingleProject/>} />
                <Route path='sign_up' element={<SignUp/>} />
                <Route path='logout' element={<Logout/>} />
                <Route path='add_project' element={<AddProject/>} />
                <Route path='inbox' element={<Inbox/>} />
                <Route path='edit_profile' element={<EditProfile/>} />
                <Route path='admin_panel' element={<AdminPanel/>} />
                <Route path='message' element={<Message/>} />
            </Routes>
        </Router>
        </div>
        )
}