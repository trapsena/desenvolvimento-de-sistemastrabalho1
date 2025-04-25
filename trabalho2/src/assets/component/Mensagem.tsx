import { useState } from "react";

export function viewMensagem():[boolean, () => void]{ //definimos a função view mensagem e definimos o valores iniciais como booleano e que a função sera void.

    const[view,setView] = useState(false) //colocamos o void como o valor que vai ter o bool e o set view como a função que vai mudadols

    function switchBool(){ 
        if (view == false) {
            setView(true) ;
        } else {
            setView(false);
        }
    }
    return [view,switchBool]; //retornamos a variavel view e a função switch pra ser usado em outros lugares
}