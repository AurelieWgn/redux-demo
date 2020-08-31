import React from 'react';
import { connect } from 'react-redux';
import { changeColor} from '../actions'


class RedBox extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }


    render(){
        return (
            <div id="redBox"  onClick={(e)=>{
                this.props.changeColor("red");
            }}>

            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        color : store.color
    }
}
const mapDispatchToProps = {
    changeColor
}

export default connect(mapStateToProps, mapDispatchToProps)(RedBox)