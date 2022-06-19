import React, {Component} from 'react';
import "./cubing.css";

export default class Cubing extends Component {
    render() {
        return (
            <div className="cubing">
                <h1>Speedcubing</h1>
                <p class="intro">I have been a competitive Rubik's Cube speedsolver for 7 years now. My official stats can be found <a className="wca"href="https://www.worldcubeassociation.org/persons/2015LEAN01" target="_blank">here</a>. I can solve the 3x3 Rubik's Cube in 8 seconds on average. 
                I also speedsolve other cubes as small as 2x2 and as large as 7x7. I first started cubing in middle school and became hooked to
                it when I was first exposed to competitive solving and have been competing since then. Outside of competition, I have
                made many friends through cubing and find the community as a whole to be very welcoming to people from all backgrounds. 
                I now help organize and run cubing competitions as well as promote speedcubing through the Rubik's Cube Club at UC Berkeley and with the Bay Area 
                speedcubing community as a whole. I also co-facilitate a student-run course where we teach Berkeley students how to solve the Rubik's cube and how to apply group theory concepts
                can be applied to the cube.</p>
            </div>
        )
    }
}