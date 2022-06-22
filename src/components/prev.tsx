import React from "react";
import { List } from '../interfaces/List'
import img from '../assets/png-transparent-christmas-gift-christmas-gift-gift-miscellaneous-ribbon-desktop-wallpaper-removebg-preview.png'
import s from '../style/inicio.module.css'

type PropsPrev = {
    lista: List[];
    handleClose: () => void;
}

export const Previsualizacion = ({lista, handleClose}:PropsPrev) => {
    return (
        <div>
            <div className={s.title}>
                <h1>Comprar:</h1>
            </div>
            <div className={lista.length > 2 ? s.container_regalos : ""}>
                {lista.length ? lista.map(el => (
                    <ul key={el.id}>
                        <li key={el.id} className={s.li}>
                            <span className={s.img_name_q}>
                                <span>
                                    <img src={el.imagen ? el.imagen : img} alt='gift' width="40px" height="40px"/>
                                </span>
                                <span>
                                    <p className={s.nombre_regalo}>{`${el.nombre} (${el.cantidad})`}</p>
                                    <p className={s.destinatario}>{el.destinatario}</p>
                                </span>
                            </span>
                        </li>
                    </ul>
                )) : ""}
            </div>
            <div>
                <button
                type='button'
                autoFocus
                className={s.btn_close}
                onClick={handleClose}
                >
                Cerrar
                </button>
            </div>
        </div>
    )
}