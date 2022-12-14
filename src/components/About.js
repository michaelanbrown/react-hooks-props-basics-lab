import React from "react";
import Links from "./Links"

function Pelement(props) {
  if (!props.bio) {
    return null;
  } else {
    return (
      <p>{props.bio}</p>
    );
  }
}

function About({bio, github, linkedin}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <Pelement bio={bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin}/>
    </div>
  );
}

export default About;
