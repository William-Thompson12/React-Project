import React from 'react';

class Buttons extends React.Component{
    constructor(props){
        super(props);
        const defaultState = {
            value: this.props.value,
            localPlayerPattern: []
        };
        this.state = defaultState;
    }

    _glow(id) {
        document.getElementById(`${id}`).classList.add('glow');
    };
    _localCount(buttonValue, pattern) {
        let localPlayerArr = this.state.localPlayerPattern; 
        this._glow(buttonValue);
        this.setState({
            localPlayerPattern: [ ...localPlayerArr, buttonValue]}, 
        () => {
            if(localPlayerArr.length === this.props.round) {
                this._handleClick(buttonValue, localPlayerArr);
            } else {
                this.props.handleClick(localPlayerArr, pattern);
            }
        })
    };
    _handleClick(value, localPattern) {
        //sends value of button
        try {
            this.props.checkWinnerClick(localPattern, this.props.pattern, this.props.round);
        }catch (error) {
            console.log(error);
        } finally {
            //glow effect
            this.props.glow();
        };
    };

    render() {
        return (
            <>
            <button className="game-button" id={this.state.value} onClick={() => this._localCount(this.state.value, this.props.pattern)}></button>
            </>
        )
    }
}
export default Buttons;