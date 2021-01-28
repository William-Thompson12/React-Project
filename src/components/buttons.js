import React from 'react'

class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    render() {
        return (
            <button className="game-button" id={this.state.value} onClick={this.props.handleClick}></button>
        )
    }
}
export default Buttons