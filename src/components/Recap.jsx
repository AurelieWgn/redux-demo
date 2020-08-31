import React from 'react';
import { connect } from 'react-redux';

class Recap extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div id="recap">
                <h1>RECAP</h1>
                <p>Le compteur est actuellement à : { this.props.number.number}</p>
                <p>La couleur actuelle du nombre est : { this.props.color.color}</p>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        number : store.number,
        color : store.color
    }
}

export default connect(mapStateToProps )(Recap);