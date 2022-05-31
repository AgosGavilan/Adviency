import React, { useState } from "react";
import s from '../style/inicio.module.css'
import { AddGift } from "./addGift";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


export const Inicio = () : JSX.Element => {
    //const [lista, setLista] = useState(["medias", "zapatillas", "carteras"])
    const [lista, setLista] = useState([
        {
            nombre: "medias",
        cantidad: 1
        },
        {
            nombre: "zapatillas",
        cantidad: 1
        },
        {
            nombre: "carteras",
        cantidad: 1
        }
    ])

    function handleDelete(r: any) :void { //por parametro me llego el regalo que tengo que eliminar
        setLista(lista.filter(g => g.nombre !== r)) //y le digo que filtre por aquellos regalos que no se llamen igual que mi regalo a eliminar
    }

    function deleteAll (r: any){
        return lista.length > 0 
        ? setLista(lista.filter(g => g.nombre === r))
        : ''
    }


    return(
        <div className={s.main}>
            <div className={s.box}>
                <div className={s.title}>
                    <h1>REGALOS:</h1>
                </div>
                <AddGift setLista={setLista} lista={lista}/>
                {lista.length ? lista.map(r => (
                        <ul key={r.nombre}>
                            <li key={r.nombre} className={s.li}>
                                {`${r.nombre} x${r.cantidad == null ? 1 : r.cantidad}` }
                                <span>
                                    <button //al boton de eliminar le tengo que decir QUE ELEMENTO de mi array de regalos tienen que eliminar
                                    onClick={()=> handleDelete(r.nombre)} //asi que por parametro le paso a la funcion el elemento (r)
                                    className={s.trash}
                                    >
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </span>
                            </li>
                        </ul>
                )): <div className={s.emptyList}>La lista esta vacía 😔 ¡Agrega algo!</div>}
                {lista.length 
                ? <div className={s.trashAll_container}>
                    <button onClick={deleteAll} className={s.trashAll}>Borrar todo</button>
                </div> 
                : ""}
            </div>
        </div>
    )
}