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

    _glow(id) {
        document.getElementById(`${id}`).classList.add('glow');
    }

    _renderBoard() {
        let newButtons = []

        for(let i = 1;i <= this.state.max; i++){
            newButtons.push(i)
        }
        
        return(
        <>
            {newButtons.map(buttonValue => (
            <Buttons handleClick={this.props.handleClick} pattern={this.props.pattern} value={buttonValue} key={buttonValue}/>
            ))}
        </>
        )
    }
    
    _startGameClick() {
        //starts game
        this.props.startGameClick();
        let computerArr = this.props.pattern
        //set glow
        setTimeout(() => console.log('running glow'), computerArr.forEach(button => {
            this._glow(button);
        }), 2000)
        setTimeout(() => console.log('running glow'), computerArr.forEach(button => {
            this._glow(button);
        }), 3010)
    }

    render() {
        return (
            <div className="game-container">
                <button className="btn btn-dark" id="check-pattern" onClick={() => this.props.checkWinnerClick(this.props.playerPattern, this.props.pattern)}>Check Pattern</button>
                <div className="game-board">
                    {this._renderBoard()}
                </div>
                {console.log(this.props.playerPattern, this.props.pattern)}
                <button className="btn btn-success" id="start-game" onClick={() => this._startGameClick()}>Start Game</button>
            </div>
        )
    }
}
export default Board