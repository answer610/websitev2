import React, {Component} from 'react';
import './coursework.css'

export default class Coursework extends Component {
    render() {
        return (
            <div className="courses">
                    <h1>Relevant Coursework</h1>
                    <h2>Summer 2020</h2>
                    <ul>
                        <li>CS 61A: Structure and Interpretation of Programs</li>
                    </ul>
                    <h2>Fall 2020</h2>
                    <ul>
                        <li>CS 61B: Data Structures</li>
                        <li>Data 8: Foundations of Data Science</li>
                    </ul>    
                    <h2>Spring 2021</h2>
                    <ul>
                        <li>CS 70: Discrete Math and Probability Theory</li>
                        <li>EECS 16A: Designing Information Devices and Systems I</li>
                    </ul>
                    <h2>Fall 2021</h2>
                    <ul>
                        <li>CS 61C: Machine Structures</li>
                        <li>CS 170: Efficient Algorithms and Intractable Problems</li>
                    </ul>
                    <h2>Spring 2022</h2>
                    <ul>
                        <li>EECS 16B: Designing Information Devices and Systems II</li>
                        <li>CS 188: Intro to Artificial Intelligence</li>
                    </ul>
                    <h2>Fall 2022</h2>
                    <ul>
                        <li>CS 161: Computer Security</li>
                        <li>CS 186: Database Systems</li>
                        <li>EECS 127: Optimizations Models in Engineering</li>
                    </ul>
                    <h2>Spring 2023</h2>
                    <ul>
                        <li>CS 189: Machine Learning</li>
                        <li>CS 164: Compilers and Programming Languages</li>
                    </ul>
            </div>
        )
    }
}