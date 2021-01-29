import React from 'react'
import Buttons from './buttons'


const defaultState = {
    max: 9,
    playerPattern: []
}

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = defaultState
    }

    _patternCounter(value) {
        // const newPattern = [...state.playerPattern, value];
        // this.setState({
        //     ...state,
        //     playerPattern: newPattern
        // })
        console.log(value)
    }

    _renderBoard() {
        let newButtons = []

        for(let i = 1;i <= this.state.max; i++){
            newButtons.push(i)
        }
        
        return(
        <>
            {newButtons.map(buttonValue => (
            <Buttons generateAfterClick={this.props.generateAfterClick} handleClick={this.props.handleClick} value={buttonValue} key={buttonValue}/>
            ))}
        </>
        )
    }
    
    render() {
        return (
            <div className="game-container">
                <button className="btn btn-dark" id="check-pattern" onClick={this.props.checkWinnerClick}>Check Pattern</button>
                <div className="game-board">
                    {this._renderBoard()}
                </div>
                {/* needs the start function (start function needs to check if user won or finished game gameFinished ? *are you sure pop up*) */}
                <button className="btn btn-success" id="start-game" onClick={this.props.start}>Start Game</button>
            </div>
        )
    }
}
export default Board