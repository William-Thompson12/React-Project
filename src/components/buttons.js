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
    _localCount(value, pattern) {
        if(this.state.localPlayerPattern.length === pattern.length - 1) {
            console.log('Pattern is the same length submit for review')
            this.setState({
                value,
                localPlayerPattern: [ ...this.state.localPlayerPattern, value]}, 
                () => {
                    this._handleClick(value, this.state.localPlayerPattern);
                    this.props.handleClick(this.state.localPlayerPattern, pattern);
                    console.log(value, '<- value of button, value of local pattern ->', this.state.localPlayerPattern);
                }
            );
            setTimeout(() => this.setState({
                value,
                localPlayerPattern: this.defaultState.localPlayerPattern} 
            ), 200)
            this.props.resetGame()
        } else {
            console.log('Pattern isnt the same length adding to arrray')
            this.setState({
                value,
                localPlayerPattern: [ ...this.state.localPlayerPattern, value]}, 
                () => {
                    this._handleClick(value, this.state.localPlayerPattern);
                    this.props.handleClick(this.state.localPlayerPattern, pattern);
                    console.log(value, '<- value of button, value of local pattern ->', this.state.localPlayerPattern);
                }
            );
        }
    };
    _handleClick(value, localPattern) {
        //sends value of button
        try {
            this._glow(value);
            this.props.checkWinnerClick(localPattern, this.props.pattern);
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