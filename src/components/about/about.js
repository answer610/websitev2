import React, {Component} from "react";
import './about.css'
import profile_pic from './profile_pic2.jpg';

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <img src={profile_pic} alt="Profile Picture" width="300" height="300" className="pic"/>
                <p>Hi! My name is An Le and I am a undergraduate student at UC Berkeley pursuing a major in Computer Science. I am not 100% sure what
                path I want to go down, but I am interested in AI and software engineering. Outside of school and CS, I am a keyboard enthusiast and a Rubik's Cube speedsolver.</p>
            </div>
        )
    }
}