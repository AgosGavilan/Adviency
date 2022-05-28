import React, { useState } from "react";
import s from '../style/inicio.module.css'
import { AddGift } from "./addGift";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


export const Inicio = () : JSX.Element => {
    const [lista, setLista] = useState(["medias", "zapatillas", "carteras"])

    function handleDelete(r: string) :void { //por parametro me llego el regalo que tengo que eliminar
        setLista(lista.filter(g => g !== r)) //y le digo que filtre por aquellos regalos que no se llamen igual que mi regalo a eliminar
    }

    function deleteAll (r: any) {
        return lista.length > 0 
        ? setLista(lista.filter(g => g === r))
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
                        <ul key={r}>
                            <li key={r} className={s.li}>
                                {r}
                                <span>
                                    <button //al boton de eliminar le tengo que decir QUE ELEMENTO de mi array de regalos tienen que eliminar
                                    onClick={()=> handleDelete(r)} //asi que por parametro le paso a la funcion el elemento (r)
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