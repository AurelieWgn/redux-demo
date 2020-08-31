import React from 'react';
import { connect } from 'react-redux';
import { changeColor} from '../actions'


class BlueBox extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
       
    }
    

    render(){
        return (
            <div id="blueBox" onClick={(e)=>{
                this.props.changeColor("blue");
            }}>
               
            </div>
        )
    }
}

//Connexion au store, à ces props et à sa fonction changeColor
const mapStateToProps = (store) => {
    return {
        color : store.color
    }
}
const mapDispatchToProps = {
    changeColor
}

export default connect(mapStateToProps, mapDispatchToProps)(BlueBox)