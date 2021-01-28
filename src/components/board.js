import React from 'react'
import Buttons from './buttons'

const defaultState = {
    max: 9
}

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = defaultState
    }

    _buttonGlow() {
        document.querySelector(`#${this.state.value || 1}`).classList.add('glow');
    }

    _renderBoard() {
        let newButtons = []

        for(let i = 1;i <= this.state.max; i++){
            newButtons.push(i)
        }
        
        return(
        <>
            {newButtons.map(buttonValue => (
                //add handleClick
            <Buttons value={buttonValue} key={buttonValue}/>
            ))}
        </>
        )
    }
    
    render() {
        return (
            <div className="game-container">
                <button className="btn btn-dark" id="check-pattern" onClick={(e) => this._pushValue(e)}>Check Pattern</button>
                <div className="game-board">
                    {this._renderBoard()}
                </div>
            </div>
        )
    }
}
export default Board