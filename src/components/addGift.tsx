import React, { useState } from "react";
import s from '../style/add.module.css'

type Props = { //mediante la palabra clave type permite crear nuevos tipos y luego reutilizarlos
    setLista: ([]) => void;
    lista: string[];
}

//export const AddGift: React.FC<Props> = ({setLista, lista}) => {} //Las FC pueden ser escritos como funciones normales que toman props como argumentos y retornan un elemento JSX
export const AddGift = ({setLista, lista}: Props) => { 
    const [regalo, setRegalo] = useState("")

    function handleChange(e: any) :void {
        e.preventDefault()
        setRegalo(e.target.value)
    }

    function handleSubmit (e: any) :void{
        e.preventDefault()
        setLista([...lista, regalo])
        setRegalo("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className={s.form}>
                <input
                className={s.input}
                type='text'
                value={regalo}
                placeholder='Añadir regalo'
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