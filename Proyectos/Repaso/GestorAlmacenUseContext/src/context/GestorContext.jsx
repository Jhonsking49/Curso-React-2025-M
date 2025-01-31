import React, { useEffect } from 'react';
import { useState } from 'react';

const GestorContext = React.createContext();


export const GestorProvider = ({children}) => {
    /**
     * ESTRUCTURA DEL OBJETO
     * id: identificador unico
     * nombre: nombre del objeto
     * tipo: tipo del objeto
     * cantidad: cantidad de objetos
     * precio: precio del objeto
     */

    // --------------------HOOKS----------------------
    const [Objetos, setObjetos] = useState(() => {
        const savedAlmacen = localStorage.getItem('productos');
        return savedAlmacen ? JSON.parse(savedAlmacen) : [];
    });

    const [tipoObjeto, setTipoObjeto] = useState(()=>{
        const savedTipoObjeto = localStorage.getItem('tipoProducto');
        return savedTipoObjeto ? JSON.parse(savedTipoObjeto) : [];
    });

    // --------------------ACCIONES----------------------
    
    const addObject = (object) => {
        setObjetos((prevObjetos)=>[...prevObjetos, object])
    }
    
    const deleteObject = (objectId) => {
        setObjetos((prevObjetos)=> prevObjetos.filter((object)=> object.id != objectId))
    }

    const editObject = (editedObject) => {
        setObjetos((prevObjetos)=>prevObjetos.map(object => object.id === editedObject.id ? {...object, ...editedObject} : object))
        }

    const addTipoObjeto = (newTipoObjeto) => {
        setTipoObjeto((prevTipoObjeto)=>[...prevTipoObjeto, newTipoObjeto])
    }

    const deleteTipoObjeto = (tipoObjetoId) => {
        setTipoObjeto((prevTipoObjeto)=> prevTipoObjeto.filter((tipoObjeto)=> tipoObjeto.id != tipoObjetoId))
    }

    useEffect(() => {
        localStorage.setItem('objetos', JSON.stringify(Objetos));
        localStorage.setItem('tipoObjeto', JSON.stringify(tipoObjeto));
    }, [Objetos, tipoObjeto])

    return (
        <GestorContext.Provider value={{
            Objetos, 
            addObject, 
            deleteObject, 
            editObject, 
            tipoObjeto, 
            addTipoObjeto, 
            deleteTipoObjeto
        }}>
            {children}
        </GestorContext.Provider>
    )
}