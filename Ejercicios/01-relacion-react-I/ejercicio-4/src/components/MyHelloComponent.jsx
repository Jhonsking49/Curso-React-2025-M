import React from 'react'


export default class MyHelloComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            myText: "Hola mundo"
        };
    }

    handlechange= ()=> {
        this.setState({myText: "Me llamo Juan"})
    }
    render() {
        return (
            <div>
                <h3>{this.state.myText}</h3>
                <button onClick={this.handlechange} >Cambiar estado</button>
            </div>
        )
    }
}
