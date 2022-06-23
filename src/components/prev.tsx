import React from "react";
import { List } from '../interfaces/List'
import img from '../assets/png-transparent-christmas-gift-christmas-gift-gift-miscellaneous-ribbon-desktop-wallpaper-removebg-preview.png'
import s from '../style/inicio.module.css';
import a from '../style/add.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPrint} from "@fortawesome/free-solid-svg-icons"

type PropsPrev = {
    lista: List[];
    handleClose: () => void;
}

export const Previsualizacion = ({lista, handleClose}:PropsPrev) => {

    function handlePrint () {
        window.print()
    }

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
            <div className={a.btn_form}>
                <button
                type='button'
                autoFocus
                className={a.btn_close}
                onClick={handleClose}
                >
                Cerrar
                </button>
                <button
                type="button"
                value="imprimir"
                className={a.btn}
                onClick={handlePrint}
                >
                    <FontAwesomeIcon icon={faPrint}/>
                </button>
            </div>
        </div>
    )
}