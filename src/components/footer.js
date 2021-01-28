import React from 'react'

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <nav className="footer navbar navbar-dark text-center bg-dark fixed-bottom">
                <div className="footer-links">
                    <a className="nav-link active" href="https://github.com/William-Thompson12/React-Project">GitHub</a>
                    <a className="nav-link active" href="https://linkedin.com/in/william-thompson12">Linkedin</a>
                </div>
            </nav>
        )
    }
}

export default Footer