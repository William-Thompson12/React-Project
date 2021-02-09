import React from 'react'

class Instructions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            instructons: false
        }
    }
    _dropDown() {
        if(this.state.instructons === true) {
            document.getElementById('dropdown').classList.add('invisiable');
            this.setState({
                instructons: false
            })
        } else {
            document.getElementById('dropdown').classList.remove('invisiable');
            this.setState({
                instructons: true
            })
        }
    }

    render(){
        return (
            <div className="dropdown">
            <button className="btn btn-dark dropdown-toggle" onClick={() => this._dropDown()}>Instructions</button>
            <ol id="dropdown" className="invisiable">
                <li>Input a #, then press "Start Game"</li>
                <li>Watch for which sqaures light up</li>
                <li>Match the pattern and move on to the next round</li>
            </ol>
            </div>
        )
    }
}

export default Instructions