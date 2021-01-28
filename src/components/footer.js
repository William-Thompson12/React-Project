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
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="https://github.com/William-Thompson12/React-Project">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="www.linkedin.com/in/william-thompson12">Linkedin</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Footer