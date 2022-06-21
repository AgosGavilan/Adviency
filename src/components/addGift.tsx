import React, { useState } from "react";
import s from '../style/add.module.css'
import { List } from "../interfaces/List"

type Props = { //la palabra clave type permite crear nuevos tipos y luego reutilizarlos
    setLista: ([]) => void;
    lista: List[]; //Y DE ESTA MANERA SE TYPEA UN ARRAY DE OBJETOS
    handleClose: () => void
}

//export const AddGift: React.FC<Props> = ({setLista, lista}) => {} //Las FC pueden ser escritos como funciones normales que toman props como argumentos y retornan un elemento JSX
export const AddGift = ({setLista, lista, handleClose}: Props) => {
    const nombres = ["Computadora", "Medias", "Cartera", "Perfume", "Maquillaje", "Juego de mate", "Mochila"]
    const aleatorio = nombres[Math.floor(Math.random() * nombres.length)]
    const [regalo, setRegalo] = useState({
        id: Math.random(),
        nombre: '' ,
        cantidad: 1,
        imagen: '',
        destinatario: '',
        precio: 0
    })


    function handleChange(e: any) :void {
        e.preventDefault()
        setRegalo((prev: List) => ({ //seteo mi estado local con el valor de mis inputs
            ...prev, //hago una copia de lo que ya tenia en mi estado
            [e.target.name]: e.target.value //y le agrego el valor de mis inputs
        }))
    }

    function handleAleatorio(e: any) {
        e.preventDefault()
        setRegalo((prev: List) => ({
            ...prev,
            nombre: aleatorio
        }))
        

    }

    function handleSubmit (e: any) :void{
        e.preventDefault()
        setLista([...lista, regalo])
        setRegalo({
            id: regalo.id,
            nombre: '',
            cantidad: 1,
            imagen: '',
            destinatario: '',
            precio: 0
        })
        handleClose()
    }


    return (
        <div>
            <form className={s.form}>
                <label className={s.labels}>Regalo<span className={s.asterisco}>*</span>: </label>
                <span className={s.sorprendeme}>
                <input
                className={s.input} 
                required
                type='text'
                name="nombre"
                value={regalo.nombre}
                placeholder='Regalo...'
                onChange={handleChange}
                />
                    <button
                    className={s.btn_sorprendeme}
                    onClick={handleAleatorio}
                    >
                        ¡Sorpréndeme!
                    </button>
                    </span>
                <label className={s.labels}>Destinatario<span className={s.asterisco}>*</span>: </label>
                <input
                className={s.input}
                required
                type='text'
                name="destinatario"
                value={regalo.destinatario}
                placeholder='Este regalo es para...'
                onChange={handleChange}
                />
                <label className={s.labels}>Imagen: </label>
                <input 
                className={s.input_img}
                type='url'
                value={regalo.imagen}
                name='imagen'
                placeholder="http://image..."
                onChange={handleChange}
                />
                <label className={s.labels}>Cantidad: </label>
                <input
                className={s.cantidad}
                type='number'
                min={1}
                value={regalo.cantidad}
                name='cantidad'
                onChange={handleChange}
                />
                <label className={s.labels}>Precio:  </label>
                <span className={s.container_precio}>
                    <span className={s.box_signo}><p className={s.signo}>$</p></span>
                    <input
                    className={s.input}
                    required
                    type='number'
                    name='precio'
                    value={regalo.precio}
                    onChange={handleChange}
                    />
                </span>
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