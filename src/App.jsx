import React from "react";
import './App.css'; 

class Contador extends React.Component{

    state = {
        cuenta: 0
    }

    aumentar = () => {
        this.setState({cuenta: this.state.cuenta+1})
    }

    render() {
        return(
            <div id="contador">
                <h1 className="title">Contador</h1>
                <label className="number">{this.state.cuenta}</label>
                <br />
                <br />
                <button className="button" onClick={this.aumentar}>Aumentar</button>
            </div>
        );
    }
}

export function App(){

    return(
        <div><Contador/></div>
    );
}