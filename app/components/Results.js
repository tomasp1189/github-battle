import React from 'react';

class Results extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        console.log(this.props);
        return(
            <div>Results</div>
        )
    }
}

module.exports = Results;