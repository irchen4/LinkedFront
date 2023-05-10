import React from "react";
import {Link} from 'react-router-dom';
import icon_next from './img/play_media_icon.svg'


export default function EditProfile (){
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
<div class='container_content'>  
        <div class="addprcontainer">  
        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>name</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>

        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>short_intro</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>

        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>bio</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>

        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>profile_image</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>

        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>email</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>
        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>email</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>
        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>social_github</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>
        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>social_twitter</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>

        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>social_vk</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>
        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>social_youtube</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>
        <div class="icontitle">
          <img class="icon"src={icon_next}/>
          <h3>social_website</h3>
        </div>
        <div class="btninut">
        <input class="prinput" placeholder='Enter title of project'></input>
        <input class="btn-add" type="submit" value="Add" ></input>
        </div>

        </div>  
      </div>
    )
}