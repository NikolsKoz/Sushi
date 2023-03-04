import React from "react";
import style from "../../sass/Main.module.scss";
import article from "../../data/article.json";
import photo_r from "../../images/роли/1.png";
import photo_s from "../../images/сети/5.png";

export const Main = () => {
    const Menu_rolls = (props) => {
        return (
            <div className={style.menu}>
                <div className={style.menu_content}>
                    <img src={props.item.imag}/>
                    <h4>{props.item.name}</h4>
                    <span>{props.item.weight}</span>
                    <div className={style.menu_price}>
                        <h4>{props.item.price}</h4>
                        <button>Додати до кошику</button>
                    </div>
                </div>
            </div>
        )
    }
    const Menu_sets = (props) => {
        return (
            <div className={style.menu}>
                <div className={style.menu_content}>
                    <img src={props.item.imag}/>
                    <h4>{props.item.name}</h4>
                    <span>{props.item.weight}</span>
                    <div className={style.menu_price}>
                        <h4>{props.item.price}</h4>
                        <button>Додати до кошику</button>
                    </div>
                </div>
            </div>
        )
    }
    return(

        <div className = {style.main}>
            <div className={style.menu_wrapper}>
                <h3>Роли</h3>
                <div className={style.roll_box}>
                    {article.rols.map(item =><Menu_rolls item ={item}/>)}
                </div>
                <h3>Сети</h3>
                <div className={style.roll_box}>
                    {article.sets.map(item =><Menu_sets item ={item}/>)}
                </div>

            </div>

        </div> 
    )
}