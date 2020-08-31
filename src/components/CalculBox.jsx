import React from 'react';
import { connect } from 'react-redux';
import { addOne, delOne } from '../actions'


class CalculBox extends React.Component {
    constructor(props){
        super(props)
    }
    

    render(){
        return (
            <div id="calculBox">
                <button onClick={(e)=>{
                    this.props.addOne(1);
                }} >+ 1</button>
                <button onClick={(e)=>{
                    this.props.delOne(1);
                }} >- 1</button>
            </div>
        )
    }
}


//**Connexion au store : utilisation du state global number et des deux fonction addOne et delOne**//
const mapStateToProps = (store) => {
    return {
        number : store.number
    }
}
const mapDispatchToProps = {
    addOne,
    delOne
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculBox)