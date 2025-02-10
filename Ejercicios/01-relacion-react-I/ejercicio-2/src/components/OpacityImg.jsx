import { useState } from "react";

const ImageOpacityChanger = () => {
    const [opacity, setOpacity] = useState(0);

    const handlemouseenter = () => {
        setOpacity(100);
    }

    const handlemouseleave = () => {
        setOpacity(0);
    }

    return (
        <div className="flex flex-col items-center mt-10">
            <h2>
                La opacidad de la imagen es {opacity/100}
            </h2>
            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_23.jpg" 
            className={"opacity-0 transition duration:700 ease-in-out hover:opacity-100"} 
            onMouseEnter={handlemouseenter} onMouseLeave={handlemouseleave}/>
        </div>
    );
};

export default ImageOpacityChanger;
