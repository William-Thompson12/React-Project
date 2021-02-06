import React from 'react'

class Instructions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="dropdown instruction-container">
                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Instructions</button>
                    <ol className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>Press "Start Game"</li>
                        <li>Watch for which sqaures light up</li>
                        <li>Match the pattern and move on to the next round</li>
                    </ol>
            </div>
        )
    }
}

export default Instructions