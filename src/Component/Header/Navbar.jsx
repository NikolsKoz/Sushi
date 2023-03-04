import React, {Component} from "react";
import article from "../../data/article.json";
import {Link, animateScroll as scroll} from "react-scroll";
// import style from "../../sass/Header.module.scss"
import ".././../sass/Header.module.scss";



export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (

            <>
                {article.links.map(item =><Link
                    // activeClass="active"
                    // to={item.to}
                    // spy={true}
                    // smooth={true}
                    // offset={0}
                    // duration={500}
                    key={item.id}
                    style={{fontSize: "25px", cursor: "grab"}}
                >
                    {item.name}
                </Link>)}
            </>

            // <nav className="nav" id="navbar">
            //                 {article.links.map(item =><Link
            //                     // activeClass="active"
            //                     // to={item.to}
            //                     // spy={true}
            //                     // smooth={true}
            //                     // offset={0}
            //                     // duration={500}
            //                     key={item.id}
            //                     style={{fontSize: "25px", margin: '0 4%', cursor: "grab"}}
            //                 >
            //                     {item.name}
            //                 </Link>)}
            // </nav>
        );
    }
}