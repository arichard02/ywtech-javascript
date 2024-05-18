import "./Profile.css";
import React, { useState } from "react";

export default function Profile({ name, picture, bio }) {
    const [activeClass, setActiveClass] = useState("profile");

    function showFullscreen() {
        setActiveClass("profile full-screen");
    }

    function showRegular(event) {
        event.stopPropagation();
        setActiveClass("profile");
    }

    return (
        <section className={activeClass} onClick={showFullscreen}>
            <h3>{name}</h3>
            <img src={picture} />
            <p>{bio}</p>
            <button onClick={showRegular}>Close</button>
        </section>
    );
}
