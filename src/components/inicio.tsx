import { useEffect, useState } from "react";
import s from '../style/inicio.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import img from '../assets/png-transparent-christmas-gift-christmas-gift-gift-miscellaneous-ribbon-desktop-wallpaper-removebg-preview.png'
import InputModal from "./inputModal"
import EditModal from "./editModal";
import { List } from "../interfaces/List"
import api from "../helpers/api";
import { Loading } from "./loading";

export const Inicio = () : JSX.Element => {
    const [lista, setLista] = useState<List[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true);
        api.gifts.list()
        .then(lista => setLista(lista.data))
        .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        if(lista.length > 0) { // si mi lista esta cargada
            api.gifts.save(lista) //guardame lo que tenga lista en mi LS
            .then(console.log)
            .catch(console.log)
        }
    }, [lista])

    function handleDelete(r: number) :void { //por parametro me llego el regalo que tengo que eliminar
        setLista(lista.filter(g => g.id !== r)) //y le digo que filtre por aquellos regalos que no se llamen igual que mi regalo a eliminar
        localStorage.setItem('lista', JSON.stringify(lista.filter(g => g.id !== r)))
    }

    function deleteAll () :void {
       setLista([])
    }

    if(loading) {
        return <Loading />
    }

    return(
        <div className={s.main}>
            <div className={s.box}>
                <div className={s.title}>
                    <h1>Regalos:</h1>
                </div>

                < InputModal setLista={setLista} lista={lista} />

                {lista.length ? lista.map(r => (
                        <ul key={r.id}>
                            <li key={r.id} className={s.li}>

                                {/* nombre, imagen y destinatario del regalo */}
                                <span className={s.img_name_q}>
                                    <span style={span_circle}>
                                        <img src={r.imagen ? r.imagen : img} alt='gift' width="40px" height="40px"/>
                                        <span className={s.rounded_circle}>{r.cantidad}</span>
                                    </span>
                                    <span>
                                        <p className={s.nombre_regalo}>{r.nombre}</p>
                                        <p className={s.destinatario}>{r.destinatario}</p>
                                    </span>
                                </span>

                                {/* botones de editar y eliminar regalo */}
                                <span className={s.span_buttons}>
                                    <EditModal setLista={setLista} lista={lista} edit={r}/>
                                    <button //al boton de eliminar le tengo que decir QUE ELEMENTO de mi array de regalos tienen que eliminar
                                    onClick={()=> handleDelete(r.id)} //asi que por parametro le paso a la funcion el elemento (r)
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

const span_circle = {
    display: "flex",
    marginRight: '10px'
}



//ASI UTILIZAMOS EL LOCALSTORAGE SIN API.TSX
// const [lista, setLista] = useState<List[]>(() => { //lista va a recibir un cb que puede retornar o un objeto o un array vacio
//     // para obtener el valor del almacenamiento
//     const saved = localStorage.getItem("lista"); //obengo la key 'lista' del objeto localStorage
//     if(saved) { //si tengo ese key guardada
//         const initialValue = JSON.parse(saved); //parsealo a objeto ya que esta guardado en mi LS como un string
//         return initialValue || []; //y retorname el objeto si mi key 'lista' tiene algo, sino retorname entonces un array vacío
//     }
//   });



// useEffect(() => { //cuando montes el componente
//     localStorage.setItem('lista', JSON.stringify(lista)) //con setItem almacenamos en el objeto localStorage un par clave/valor. En este caso, agregamos al LS = {'lista': (aca puede ir o mi array vacio '[]' si es que no tengo nada o mi array con mis regalos '[{}, {} ...]')}
// }, [lista])


//La propiedad localStorage te permite acceder al OBJETO local "Storage"

//PARA GUARDAR DATOS EN MI LOCALSTORAGE = localStorage.setItem(name, content). Con setItem agregamos una key(name) y un value(content) al objeto Storage
//PARA LEER UN ITEM ALMACENADO EN MI LOCALSTORAGE = localStorage.getItem(name)