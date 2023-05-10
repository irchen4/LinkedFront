import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

export default function SignUp (){

    return(
        <div class='container_content'>
            <div class="formcontainer">
            <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input class="input_login" type="text" name="txt" placeholder="User name" required=""/>
					<input class="input_login" type="email" name="email" placeholder="Email" required=""/>
					<input class="input_login" type="password" name="pswd" placeholder="Password" required=""/>
					<button class="btn_login">Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input class="input_login" type="email" name="email" placeholder="Email" required=""/>
					<input class="input_login" type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>      
       
       
        {/*<h3>Email</h3>
        <input class="prinput" placeholder='Enter your email'></input>
        <h3>Password</h3>
        <input class="prinput" placeholder='Enter your password'></input>
        <button class="btn-search" type="submit">LogIn</button>*/}
    </div>
    
        </div>
        
    )}