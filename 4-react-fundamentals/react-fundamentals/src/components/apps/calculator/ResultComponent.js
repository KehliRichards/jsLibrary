import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {results} = this.props;
        return (
            <div className="results">
                <h4>{results}</h4>
            </div>
    )
        ;
    }
}


export default ResultComponent;