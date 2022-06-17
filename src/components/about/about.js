import React, {Component} from "react";
import './about.css'
import profile_pic from './profile_pic2.jpg';
import { SocialIcon } from 'react-social-icons';

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About Me</h1> 
                <img src={profile_pic} alt="Profile Picture" width="300" height="300" className="pic"/>
                <span style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10px"
                }}>
                    <SocialIcon url="https://www.linkedin.com/in/an-le-048523197/"/> &nbsp;
                    <SocialIcon url="https://www.dropbox.com/s/j0tkzr7kgstysrz/resume_current.pdf?dl=0"/> &nbsp;
                    <SocialIcon url="mailto:anl2002@berkeley.edu"/> &nbsp;
                    <SocialIcon url="https://github.com/answer610" fgColor="white" bgColor="black"/> &nbsp;
                    <SocialIcon url="https://www.worldcubeassociation.org/persons/2015LEAN01"/>
                </span>
                <span className="about">
                    <p>Hi! My name is An Le and I am a undergraduate student at UC Berkeley pursuing a major in Computer Science. I am not 100% sure what
                    path I want to go down, but I am interested in AI and software engineering. Outside of school and CS, I am a keyboard enthusiast and a Rubik's Cube speedsolver.</p>
                </span>
            </div>
        )
    }
}