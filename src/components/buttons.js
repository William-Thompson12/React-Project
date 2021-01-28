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

    render() {
        return (
            <button className="game-button" id={this.state.value} onClick={this.props.handleClick(this.state.value), () => this._glow(this.state.value)}></button>
        )
    }
}
export default Buttons