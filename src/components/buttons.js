import React from 'react'

class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    _glow(id) {
        document.getElementById(`${id}`).classList.add('glow');
    }

    _handleClick(value, pattern) {
        console.log(value, pattern)
        //sends value of button
        this.props.handleClick(value, pattern);
        //glow effect
        this._glow(value);
    }

    render() {
        return (
            <>
            <button className="game-button" id={this.state.value} onClick={() => this._handleClick(this.state.value, this.props.pattern)}></button>
            </>
        )
    }
}
export default Buttons