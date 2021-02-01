import React from 'react'

class Popup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    _handleClick() {
        this.props.resetGameClick();
    }
    render(){
        return (
            <div id="popup-container">
                <div id="popup-message" className="popup-message"></div>
                <div className="reset-game">
                    <button id="popup-button" className="btn btn-primary popup-button" onClick={() => this._handleClick()}>Play Again</button>
                </div>
            </div>
        )
    }
}

export default Popup