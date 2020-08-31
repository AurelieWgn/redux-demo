import React from 'react';
import { connect } from 'react-redux';
import BlueBox from "./BlueBox";
import RedBox from "./RedBox";
import PurpleBox from "./PurpleBox";
import CalculBox from "./CalculBox.jsx";

class Home extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){

        const divStyle = {
            color: this.props.color.color,
            fontSize : "30px",
            fontWeight: "bold"
        };

        return (
            <>
                <div id="ResultBox">
                    <p style={divStyle} >{this.props.number.number}</p>
                    <CalculBox />
                </div>
                <div id="colorBox">
                    <BlueBox />
                    <RedBox />
                    <PurpleBox />
                </div>
            </>
        )
    }
}

//**Connexion au store **//
//On peut maintenant utiliser les states globaux comme des props classiques
const mapStateToProps = (store) => {
    return {
        number : store.number,
        color : store.color
    }
}
//On utilise pas dispatchToProps ici car nous n'avons pas besoin des fontions du reducer ici.
export default connect(mapStateToProps)(Home)