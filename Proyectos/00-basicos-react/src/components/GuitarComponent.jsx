import guitarsolid from "../assets/guitar-solid.svg";

const GuitarComponent = ({ guitar }) => {
    return (
        <div
            key={guitar.nombre}
            className="bg-gray-100 border p-4 mt-4 rounded-lg shadow-md flex items-center"
        >
            <img
                src={guitarsolid}
                width={80}
                alt={guitar.nombre}
                className="w-20 h-20 object-cover mr-4"
            />
            <div>
                <h2 className="text-lg font-bold">{guitar.nombre}</h2>
                <p className="text-sm text-gray-600">{guitar.tipo}</p>
                <p className="text-sm text-gray-800 font-medium">${guitar.precio}</p>
            </div>
        </div>
    );
};

export default GuitarComponent;
