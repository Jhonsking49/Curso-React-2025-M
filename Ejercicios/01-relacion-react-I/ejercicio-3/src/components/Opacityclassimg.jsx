import React from "react";

export default class Opacityclassimg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0.5
        }
    }
    handlemouseenter = () => {
        this.setState({opacity: 1});
    }

    handlemouseleave = () => {
        this.setState({opacity: 0.5});
    }
    render() {
        return (
            <div className="flex flex-col items-center mt-10">
            <h2>
                La opacidad de la imagen es {this.state.opacity}
            </h2>
            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_23.jpg" 
            className={"opacity-0 transition duration:700 ease-in-out hover:opacity-100"} 
            onMouseEnter={this.handlemouseenter} onMouseLeave={this.handlemouseleave}/>
        </div>
        )
    }


}