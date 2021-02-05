import React from 'react';

class Buttons extends React.Component{
    constructor(props){
        super(props);
        const defaultState = {
            value: this.props.value
        };
        this.state = defaultState;
    }

    _glow(id) {
        let button = [id]
        document.getElementById(`${id}`).classList.add('glow');
        setTimeout(() => button.forEach(button => {
            document.getElementById(`${button}`).classList.remove("glow");
        }), 1100)
    };

    _handleClick(buttonValue, pattern) {
        const round = this.props.round
        const playerPattern = this.props.playerPattern
        let updatedPattern = [...playerPattern, buttonValue]
        //glow for button
        this._glow(buttonValue);
        // pushPattern()
        this.props.handleClick(buttonValue, pattern);
        console.log('button.js', updatedPattern, this.props.pattern, round);
        if(updatedPattern.length === round) {
            //check winner
            this.props.checkWinnerClick(updatedPattern, this.props.pattern, round);
        } else {
            return
        }
    };

    render() {
        return (
            <>
            <button className="game-button" id={this.state.value} onClick={() => this._handleClick(this.state.value, this.props.pattern)}></button>
            </>
        )
    }
}
export default Buttons;