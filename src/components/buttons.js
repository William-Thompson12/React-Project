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
        let button = [id]
        document.getElementById(`${id}`).classList.add('glow');
        setTimeout(() => button.forEach(button => {
            document.getElementById(`${button}`).classList.remove("glow");
        }), 1100)
    };

    _localCount(buttonValue, pattern) {
        let localPlayerArr = this.state.localPlayerPattern; 
        //User glow on click.
        this._glow(buttonValue);
        // Update local State Until Length of the Arr matches round.
        this.setState({
            // [ ..., button value]
            localPlayerPattern: [ ...localPlayerArr, buttonValue]},
            // Call back function with new state 
        () => {
            //if Local Player Arr length === round ? checkWinner(), Run Computer Glow for next round on success. :  run pushPattern() which sets the arr to the local arr.
            if(localPlayerArr.length === this.props.round) {
                try {
                    //check winner
                    this.props.checkWinnerClick(localPlayerArr, this.props.pattern, this.props.round);
                }catch (error) {
                    console.log(error);
                } finally {
                    //glow effect
                    this.props.glow(this.props.round);
                };
            } else {
                // pushPattern()
                this.props.handleClick(localPlayerArr, pattern);
            }
        })
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