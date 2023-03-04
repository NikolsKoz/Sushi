import React from 'react';
import style from "../sass/Footer.module.scss";
import logo from "../images/icons/logo1.png";
import phone from "../images/icons/phon.png";


export const Footer = () => {
    return(
        <div className={style.footer}>
            <img className={style.logo} src={logo} alt="logo"/>
            <p>Наша адреса: м.Горішніє Плавні проспект Героїв Дніпра б.36<br/>Телефон для замовлення: </p>
            <nav><b><a href="tel:+3 8(888)888-88-88"><img className={style.phone} src={phone}/>+3 8(888)888-88-88</a></b><br/></nav>
        </div>
    )
}