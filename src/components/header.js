import React from 'react'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <nav className="navbar navbar-dark text-center bg-dark fixed-top">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Memoriez</span>
                </div>
            </nav>
        )
    }
}

export default Header