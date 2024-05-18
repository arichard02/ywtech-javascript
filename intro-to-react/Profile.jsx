
import "./Profile.css";
import React, {useState} from "react";

export default function Profile({name, picture, bio, resume}) {

    const [activeClass, setActiveClass] = useState("profile");


    function showFullscreen() {
        // will redraw the screen in "full screen" mode
        setActiveClass("profile full-screen");
    }
    
    function showRegular() {
        // will redraw the screen in "regular" mode
        setActiveClass("profile");
    }


    return (
		    <section className={activeClass}>
			   <h3>{name}</h3>
               <img onClick={showFullscreen} src={picture} />
               <h4>{bio}</h4>
               {resume}

            <button onClick={showRegular}>close</button>

			  </section>
      );
}