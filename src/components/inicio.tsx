import React, { useState } from "react";
import s from '../style/inicio.module.css'
import { AddGift } from "./addGift";


export const Inicio = () : JSX.Element => {
    const [lista, setLista] = useState(["medias", "zapatillas", "carteras"])


    return(
        <div className={s.main}>
            <div className={s.box}>
                <div className={s.title}>
                    <h1>REGALOS:</h1>
                </div>
                <AddGift setLista={setLista} lista={lista}/>
                <ul>
                    {lista?.map(r => (
                        <li key={r}>
                            {r}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}