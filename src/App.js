import style from "./sass/App.module.scss";
import {Header} from "./Component/Header/Header";
import {Main} from "./Component/Main/Main";
import {Footer} from "./Component/Footer";

function App() {
    return (
        <div className={style.wrapBackground}>
            <div className={style.wrapper}>
                <div className={style.App}>
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
