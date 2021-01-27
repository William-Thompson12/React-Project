import React from 'react'
import Buttons from './buttons'

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pattern: [],
            playerPattern: [],
            max: this.props.max || 9
        }
    }

    _generatePattern() {
        // let x = Math.random() * (this.state.max - 1) + 1;
        // push number to state
    }

    _checkPattern() {
        //pattern.stringify === playerPattern?
        //if not display Loss
        //else if check winner 
        //if not continue turn
    }

    _pushValue() {
        console.log("value isn't found" || this.state.value)
        // push number to state
    }

    _renderBoard() {
        let newButtons = []

        for(let i = 1;i <= this.state.max; i++){
            console.log('pushing new button')
            newButtons.push(i)
        }
        
        return(
        <>
            {newButtons.map(buttonValue => (
            <Buttons handleClick={this._pushValue} value={buttonValue} key={buttonValue}/>
            ))}
        </>
        )
    }
    render() {
        return (
            <div className="game-board">
            {this._renderBoard()}
            </div>
        )
    }
}
export default Board