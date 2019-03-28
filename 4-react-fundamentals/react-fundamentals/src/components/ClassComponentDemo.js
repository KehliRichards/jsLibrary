import React, { Component } from 'react';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'

export default class ClassComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 , countD: 0};
    }

    incrementCount = () => {
        console.log("increment called");
        this.setState(
            { count: this.state.count + 1 }
        );
    };

    incrementCountD = () => {
        console.log("increment called");
        this.setState(
            { countD: this.state.countD - 1 }
        );
    };

    render() {
        console.log("render called");
        return (
            <div className="main">
                <div className="mainDiv">
                    <div className="buttonOne">
                        <ClassComponentNotes />
                        <hr />
                        <h1>Smash that like button!</h1>
                        <h4>
                            <button onClick={this.incrementCount}>
                                <FaThumbsUp />
                                {this.state.count}
                            </button>
                        </h4>
                    </div>
                        <br />
                    <div className="buttonTwo">
                        <h1>Smash that dislike button?</h1>
                        <h4>
                            <button onClick={this.incrementCountD}>
                                <FaThumbsDown />
                                {this.state.countD}
                            </button>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}

const ClassComponentNotes = function () {
    return (
        <div>
            <h1>Class Components</h1>

            <p>Class components are considered the "React way" of writing components.</p>
            <dl>
                <dt>ES6 JS Classes</dt>
                <dd>Built on these, must understand them</dd>
                <dt>must extend Component </dt>
                <dd>Class components need to extend the React Component.</dd>
                <dt>render()</dt>
                <dd>Class components must always have a render method.</dd>
                <dt>export</dt>
                <dd>Only one class component exported per file.</dd>
            </dl>
        </div>
    );
};