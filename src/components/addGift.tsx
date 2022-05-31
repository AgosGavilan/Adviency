import React, { useState } from "react";
import s from '../style/add.module.css'


//SIEMPRE QUE PASE UN ARRAY DE OBJETOS POR PARAMETRO, PRIMERO TENGO QUE CREAR UNA INTERFACE PARA EL OBJETO
interface list {
    nombre: string;
    cantidad: number
}

type Props = { //mediante la palabra clave type permite crear nuevos tipos y luego reutilizarlos
    setLista: ([]) => void;
    lista: list[]; //Y DE ESTA MANERA SE TYPEA UN ARRAY DE OBJETOS
}

//export const AddGift: React.FC<Props> = ({setLista, lista}) => {} //Las FC pueden ser escritos como funciones normales que toman props como argumentos y retornan un elemento JSX
export const AddGift = ({setLista, lista}: Props) => { 
    const [regalo, setRegalo] = useState({
        nombre: '',
        cantidad: 1
    })

    function handleChange(e: any) :void {
        e.preventDefault()
        setRegalo(prev => ({ //seteo mi estado local con el valor de mis inputs
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
            nombre: '',
            cantidad: 1
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className={s.form}>
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
                className={s.cantidad}
                type='number'
                min={1}
                value={regalo.cantidad}
                name='cantidad'
                onChange={handleChange}
                />
                <button
                className={s.btn}
                type="submit">
                    +
                </button>
            </form>
        </div>
    )
}