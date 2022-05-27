import React, { useState } from "react";
import s from '../style/add.module.css'

export const AddGift = ({setLista, lista}: any) => {
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
                placeholder='Regalo'
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