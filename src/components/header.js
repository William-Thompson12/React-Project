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
                    <h1 className="navbar-brand mb-0">Memoriez</h1>
                </div>
            </nav>
        )
    }
}

export default Header