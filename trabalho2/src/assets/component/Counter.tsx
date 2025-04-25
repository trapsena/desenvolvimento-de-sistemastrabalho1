
import { useState } from "react";
import ThemeToggle from "./Tema";
import {Link, useNavigate} from 'react-router'

const Counter = () => {
    const [count, setCount] = useState(0); // começa o count com o valor de 0
    const navigation = useNavigate();

    function inc() {
        setCount(count + 1); //quando chamar essa função aumenta o count mais 1
    }

    function dec() {
        setCount(count - 1); // mesma coisa mas diminui 1
    }


    return (
        <>
            <h1>Contador </h1>
            <h1>{count}</h1>

            <div style={{ display: 'flex', justifyContent: 'center',marginBottom: '15px' }}> {/*o div style display flex é o layout que voce pode colocar coisas uma do lado do outro */}
                <button onClick={() => inc()}> + </button> {/*Botão que chama a função de incremento*/}
                <button onClick={() => dec()}> - </button> {/*Botão que chama a função de decrimento*/}
            </div>

            <div style={{marginBottom:'15px'}}> {/*Div com espaçamento de 15 pixels do botão da rota pra home */}
             <Link to="/list" className="previous">Back &raquo;</Link>
            </div>

            <div>
                <button onClick={() => navigation('/')}>Pagina Inicial </button>
            </div>
            <div>
            <ThemeToggle/>
            </div>
        </>
    )
}

export default Counter