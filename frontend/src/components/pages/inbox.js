import React from 'react';
import {Link} from 'react-router-dom';
export default function Inbox() {

    return(
      <div class='container_content'>
        <div class="inbox">
          <h3 class="send">New Messages</h3>
          {/*<h4 class="spantext1">Who?</h4>
          <h4 class="spantext1" >What?</h4>
    <h4 class="spantext1">When?</h4>*/}
          <div class="one_inbox">
          <a class="spantext2" href="{% url 'message' message.id %}">message.name</a>
          <a class="spantext2" href="{% url 'message' message.id %}">message.subject</a>
          <a class="spantext2" href="{% url 'message' message.id %}">message.created</a>
            </div>
        </div>
        </div>
    )  
}