import React, {Component} from "react"
import "./projects.css"

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <h1>Projects</h1>
                <h2>Scheme Interpreter</h2>
                    <ul>
                        <li>Interpreter for a subset of the Scheme language written in Python.</li>
                        <li>Can read, evaluate, and display results for a subset of Scheme expressions.</li>
                    </ul>
                <h2>BearMaps</h2>
                    <ul>
                        <li>Mapping API for the city of Berkeley.</li>
                        <li>Developed backend features in Java.</li>
                        <li>Wrote KD-Tree and A-Star Search implementations.</li>
                        <li>Verified funcitonality with JUnit testing.</li>
                    </ul>
                <h2>Build Your Own World</h2>
                    <ul>
                        <li>2D random-generated maze game written in Java.</li>
                        <li>Features selections of difficulty, avatar, and map.</li>
                        <li>Implemented saving and loading features.</li>
                        <li>Verified funcitonality with JUnit testing.</li>
                    </ul>
                <h2>NumC</h2>
                    <ul>
                        <li>Miniature version of the NumPy library written in C.</li>
                        <li>Features basic matrix operations such as addition and multiplication.</li>
                        <li>Used SIMD and OpenMP to optimize matrix operations with an overall speedup of 50x.</li>
                    </ul>
            </div>
        )
    }
}