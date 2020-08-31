import React from 'react';
import { connect } from 'react-redux';
import { changeColor} from '../actions'

class PurpleBox extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div id="purpleBox"  onClick={(e)=>{
                this.props.changeColor("purple");
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

export default connect(mapStateToProps, mapDispatchToProps)(PurpleBox);