import React from 'react';
import {Link} from 'react-router-dom';
export default function Message() {

    return(
    <div class='container_content'>

        <div class="message_box">
        <p class="send">Send Message</p>
        <form class="message_form">      
        <input name="name" type="text" class="feedback-input" placeholder="Name" />   
        <input name="email" type="text" class="feedback-input" placeholder="Email" />
        <input name="subject" type="text" class="feedback-input" placeholder="Subject" />
        <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
        <button class="message_send" type="submit">SUBMIT</button>
        </form>
        </div>
        </div>
    )  
}