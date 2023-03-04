import React, {useState} from "react";
import Navbar from "./Navbar";
import {ModalWindowBasket} from "./ModalWindowBasket";
import style from "../../sass/Header.module.scss";
import basket from "../../images/icons/basket.png";
import logo from "../../images/icons/logo1.png";
import phone from "../../images/icons/phon.png";
import instagram from "../../images/icons/instagram2.png";
import telegram from "../../images/icons/tegram.png";
import facebook from "../../images/icons/facebook.png";
import whatsapp from "../../images/icons/watsap.png";
// import {Link} from "react-router-dom";
// import article from "../../data/article.json";
import {Link} from "react-scroll";

export const Header = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div id={"home"} className={style.header}>
            <div className={style.navbar}>
                <img className={style.logo} src={logo} alt="logo"/>
                <Navbar/>
                <nav className={style.nav_basket}>
                    <div className={style.contact}>
                        <b><a href="tel:+3 8(888)888-88-88"><img src={phone}/>+3 8(888)888-88-88</a></b><br/>
                        <span>Зв'яжіться з нами для замовлення</span>
                    </div>
                    <div className={style.basket} onClick={() => setModalActive(true)}><img src={basket} alt="basket"/>
                    </div>
                    {/*<a href="#" target="blank"><img src={instagram} alt=""/></a>*/}
                </nav>
            </div>
            <div className={style.navbar_bg}></div>
            <div className={style.hedContent}>
                <div className={style.headText}>
                    <h2>BLA BLA BLA</h2>
                    <h2>НАШІ СУШІ САМІ КРАЩІ</h2>
                    <h2>BLA BLA BLA</h2>
                </div>
                <div className={style.social}>
                    {/*<nav>*/}
                    <Link to="https://www.instagram.com/osama.sushi.krop/"><img src={instagram}/></Link>
                    <Link to=""><img src={facebook}/></Link>
                    <Link to=""><img src={whatsapp}/></Link>
                    <Link to=""><img src={telegram}/></Link>
                    {/*</nav>*/}
                </div>
            </div>
            <ModalWindowBasket active={modalActive} setActive={setModalActive}>
                <div className={style.wrapForma}>
                    {/*<div className={style.photo}>*/}
                    {/*</div>*/}
                    {/*<div className={style.forma}>*/}
                    {/*    <form action="">*/}
                    {/*        Name<br/>*/}
                    {/*        <input type="text" placeholder="Enter your Name"/><br/>*/}
                    {/*        Phone<br/>*/}
                    {/*        <input type="text" placeholder="Enter your phone (e.g.+12344456788)"/><br/>*/}
                    {/*        Message<br/>*/}
                    {/*        <textarea rows="5" placeholder="Enter your message"></textarea><br/>*/}
                    {/*        <button>SEND</button>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                </div>
            </ModalWindowBasket>
        </div>
    )
}
