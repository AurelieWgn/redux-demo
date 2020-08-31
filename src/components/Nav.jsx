import React from 'react';
import {Link} from 'react-router-dom'

class Nav extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div id="nav">
                <Link className="nav-link" to="/">HOME</Link>
                <Link className="nav-link" to="/recap">RECAP</Link>
            </div>
        )
    }
}

export default Nav