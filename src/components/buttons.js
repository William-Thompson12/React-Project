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

    _handleClick(value) {
        //sends value of button
        this.props.handleClick(value);
        //glow effect
        this._glow(value);
        //generates new pattern value
        this.props.generateAfterClick();
    }

    render() {
        return (
            <>
            <button className="game-button" id={this.state.value} onClick={() => this._handleClick(this.state.value)}></button>
            </>
        )
    }
}
export default Buttons