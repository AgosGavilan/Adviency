import React, { useState } from "react";
import s from './inicio.module.css'

export const Inicio = () => {
    const [regalos, setRegalos] = useState(["medias", "zapatillas", "carteras"])
    
    return(
        <div className={s.main}>
            <div className={s.box}>
                <div className={s.title}>
                    <h1>REGALOS:</h1>
                </div>
                <ul>
                    {regalos?.map(r => (
                        <li key={r}>
                            {r}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}