import React from "react";
import { List } from "../interfaces/List"
import s from "../style/add.module.css"

type Props = { 
    setLista: ([]) => void;
    lista: List[];
    handleClose: () => void;
    edit: List
}

export const ModifyGift = ({setLista, lista, handleClose, edit}: Props) => {
    const [editar, setEditar] = React.useState({
        id: edit.id,
        nombre: edit.nombre,
        cantidad: edit.cantidad > 1 ? edit.cantidad : 1,
        imagen: edit.imagen,
        destinatario: edit.destinatario
    })

    function handleChange(e: any) :void {
        e.preventDefault()
        setEditar((prev: List) => ({
            ...prev, 
            [e.target.name]: e.target.value
        }))
    }

    function handleEdit (e: any) {
        e.preventDefault()
        // let noRepeat = lista.filter(el => el.nombre === editar.nombre)
        // if(noRepeat.length !== 0) {
        //     alert("Ya existe un regalo con ese nombre")
        //     return   
        // }
        let filtrados = lista.filter(el => el !== edit) //elimino el regalo que quiero editar
        filtrados.push(editar) //agrego el nuevo regalo, modificado
        lista = filtrados
        setLista([...lista])
        handleClose()
    }


    return (
        <div>
            <form className={s.form}>
                <label className={s.labels}>Regalo<span className={s.asterisco}>*</span>: </label>
                <input
                className={s.input}
                required
                type='text'
                name="nombre"
                value={editar.nombre}
                onChange={handleChange}
                autoFocus
                />
                <label className={s.labels}>Destinatario<span className={s.asterisco}>*</span>: </label>
                <input
                className={s.input}
                required
                type='text'
                name="destinatario"
                value={editar.destinatario}
                onChange={handleChange}
                autoFocus
                />
                <label className={s.labels}>Imagen<span className={s.asterisco}>*</span>: </label>
                <input 
                className={s.input_img}
                type='url'
                value={editar.imagen}
                name='imagen'
                placeholder="http://image..."
                onChange={handleChange}
                autoFocus
                />
                <label className={s.labels}>Cantidad<span className={s.asterisco}>*</span>: </label>
                <input
                className={s.cantidad}
                type='number'
                min={1}
                value={editar.cantidad}
                name='cantidad'
                onChange={handleChange}
                autoFocus
                />
                <div className={s.btn_form}>
                    <button
                    type='button'
                    autoFocus
                    className={s.btn_close}
                    onClick={handleClose}
                    >
                        Cerrar
                    </button>
                    <button
                    className={s.btn_modify}
                    type="submit"
                    onClick={handleEdit}
                    autoFocus>
                        Guardar cambios
                    </button>
                </div>
            </form>

        </div>
    )
}