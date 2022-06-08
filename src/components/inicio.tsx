import React, { useEffect, useState } from "react";
import s from '../style/inicio.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import img from '../assets/png-transparent-christmas-gift-christmas-gift-gift-miscellaneous-ribbon-desktop-wallpaper-removebg-preview.png'
import InputModal from "./inputModal"

interface List {
    nombre: string;
    cantidad: number;
    imagen: string
}

export const Inicio = () : JSX.Element => {
    //const [lista, setLista] = useState<List[]>([])
    const [lista, setLista] = useState<List[]>(() => { //lista va a recibir un cb que puede retornar o un objeto o un array vacio
        // para obtener el valor del almacenamiento
        const saved = localStorage.getItem("lista"); //obengo la key 'lista' del objeto localStorage
        if(saved) { //si tengo ese key guardada
            const initialValue = JSON.parse(saved); //parsealo a objeto ya que esta guardado en mi LS como un string
            return initialValue || []; //y retorname el objeto si mi key 'lista' tiene algo, sino retorname entonces un array vacío
        }
      });

    useEffect(() => { //cuando montes el componente
        localStorage.setItem('lista', JSON.stringify(lista)) //con setItem almacenamos en el objeto localStorage un par clave/valor. En este caso, agregamos al LS = {'lista': (aca puede ir o mi array vacio '[]' si es que no tengo nada o mi array con mis regalos '[{}, {} ...]')}
    }, [lista])

    function handleDelete(r: any) :void { //por parametro me llego el regalo que tengo que eliminar
        setLista(lista.filter(g => g.nombre !== r)) //y le digo que filtre por aquellos regalos que no se llamen igual que mi regalo a eliminar
        window.localStorage.setItem('lista', JSON.stringify(lista.filter(g => g.nombre !== r)))
    }

    function deleteAll () :void{
       setLista([])
    }


    return(
        <div className={s.main}>
            <div className={s.box}>
                <div className={s.title}>
                    <h1>REGALOS:</h1>
                </div>
                {/* <AddGift setLista={setLista} lista={lista}/> */}
                < InputModal setLista={setLista} lista={lista} />

                {lista.length ? lista.map(r => (
                        <ul key={r.nombre}>
                            <li key={r.nombre} className={s.li}>
                                <span className={s.img_name_q}>
                                    <img src={r.imagen ? r.imagen : img} alt='gift' width="40px" height="40px"/>
                                    <p className={s.nombre_regalo}>{`${r.nombre}   x${r.cantidad}`}</p>
                                </span>
                                <span className={s.span_trash}>
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