import React from 'react';
import PropTypes from 'prop-types';



const propsFromOutside = [
    { string: 'Color Toggle', function: 'colorToggle' },
    { string: 'Background Color Toggle', function: 'bgToggle' },
    { string: 'Border Radius Toggle', function: 'brToggle' },
    { string: 'Border Style Toggle', function: 'bsToggle' }
]

export default class PropsDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'white',
            backgroundColor: 'blue',
            borderRadius: '5px',
            borderStyle: 'dashed',
            display: 'inline-block',
            width: '300px',
            textAlign: 'center'
        }
    }

    colorToggle = () => {
        this.setState({
            color: this.state.color === 'white' ? 'red' : 'white'
        })
    }

    bgToggle = () => {
        this.setState({
            backgroundColor: this.state.backgroundColor === 'blue' ? 'black' : 'blue'
        })
    }

    brToggle = () => {
        this.setState({
            borderRadius: this.state.borderRadius === '5px' ? '15px' : '5px'
        })
    }

    bsToggle = () => {
        this.setState({
            borderStyle: this.state.borderStyle === 'dashed' ? 'dotted' : 'dashed'
        })
    }

    // render() {
    //     return (
    //         <div className="main">
    //             <div className="mainDiv">
    //                 <div style={this.state}>
    //                     {/* <FunctionalComp string="Will this display?" function={this.colorToggle}/>
    //                     <FunctionalComp string="Maybe it will..." function={this.bgToggle}/>
    //                     <FunctionalComp string="Maybe it won't..." function={this.brToggle}/>
    //                     <FunctionalComp string="Who knows?" function={this.bsToggle}/> */}
    //                     <FunctionalComp string={propsFromOutside[0].string} function={this[`${propsFromOutside[0].function}`]}/>
    //                     <FunctionalComp string={propsFromOutside[1].string} function={this[`${propsFromOutside[1].function}`]}/>
    //                     <FunctionalComp string={propsFromOutside[2].string} function={this[`${propsFromOutside[2].function}`]}/>
    //                     <FunctionalComp string={propsFromOutside[3].string} function={this[`${propsFromOutside[3].function}`]}/>
    //                 </div>
    //             </div>
    //         </div>

    //     )
    // }

    render() {
        const display = propsFromOutside.map((el, index) => {
            return (
                <FunctionalComp key={index} string={el.string} function={this[`${el.function}`]} />
            )
        })
        return (
            <div className="main">
                <div className="mainDiv">
                    <div style={this.state}>
                        {display}
                    </div>
                </div>
            </div>
        )
    }
}

const FunctionalComp = (props) => {
    return (
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
        </div>
    );
};


FunctionalComp.defaultProps = {
    string: 'this is a crazy thingamajigger!',
    function: () => console.log('PropTypes are crazy!')
}

FunctionalComp.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired
}