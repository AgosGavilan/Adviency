import React, { useState } from "react";
import s from '../style/add.module.css'
import { List } from "../interfaces/List"

type Props = { //mediante la palabra clave type permite crear nuevos tipos y luego reutilizarlos
    setLista: ([]) => void;
    lista: List[]; //Y DE ESTA MANERA SE TYPEA UN ARRAY DE OBJETOS
    handleClose: () => void
}

//export const AddGift: React.FC<Props> = ({setLista, lista}) => {} //Las FC pueden ser escritos como funciones normales que toman props como argumentos y retornan un elemento JSX
export const AddGift = ({setLista, lista, handleClose}: Props) => { 
    const [regalo, setRegalo] = useState({
        id: Math.random(),
        nombre: '',
        cantidad: 1,
        imagen: '',
        destinatario: ''
    })


    function handleChange(e: any) :void {
        e.preventDefault()
        setRegalo((prev: List) => ({ //seteo mi estado local con el valor de mis inputs
            ...prev, //hago una copia de lo que ya tenia en mi estado
            [e.target.name]: e.target.value //y le agrego el valor de mis inputs
        }))
    }

    function handleSubmit (e: any) :void{
        e.preventDefault()
        let noRepeat = lista.filter(el => el.nombre === regalo.nombre)
        if(noRepeat.length !== 0) {
            alert("Ya existe un regalo con ese nombre")
        }
        else {setLista([...lista, regalo])}
        setRegalo({
            id: regalo.id,
            nombre: '',
            cantidad: 1,
            imagen: '',
            destinatario: ''
        })
        console.log("soy id: ", regalo)
        handleClose()
    }


    return (
        <div>
            <form className={s.form}>
                <input
                className={s.input}
                required
                type='text'
                name="nombre"
                value={regalo.nombre}
                placeholder='Añadir regalo'
                onChange={handleChange}
                />
                <input
                className={s.input}
                required
                type='text'
                name="destinatario"
                value={regalo.destinatario}
                placeholder='Este regalo es para...'
                onChange={handleChange}
                />
                <input 
                className={s.input_img}
                type='text'
                value={regalo.imagen}
                name='imagen'
                placeholder="http://image..."
                onChange={handleChange}
                />
                <input
                className={s.cantidad}
                type='number'
                min={1}
                value={regalo.cantidad}
                name='cantidad'
                onChange={handleChange}
                />
                <div className={s.btn_form}>
                    <button
                    type='button'
                    className={s.btn_close}
                    onClick={handleClose}
                    >
                        Cerrar
                    </button>
                    <button
                    className={s.btn}
                    type="submit"
                    onClick={handleSubmit}>
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    )
}