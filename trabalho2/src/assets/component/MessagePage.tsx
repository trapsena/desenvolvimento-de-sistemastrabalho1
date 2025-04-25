import { useState } from "react";
import ThemeToggle from "./Tema";
import { viewMensagem } from "./Mensagem";
import { Link } from "react-router-dom";
export  function MensagemPage(){
    
    const [view, switchBool] = viewMensagem() //chamamos as funçoes para elas serem usadas nesses componentes

    return(
      <>
      <div style={{marginBottom:'15px'}}>
            <button onClick={() => switchBool()}>Mostrar Mensagem</button> {/*faz um botão que quando clica chama o switch bool*/}
            {view && <p>I hope Vivian won't die in this update</p>} {/*printa um paragrafo na pagina mas com o && ele apenas printa se o view estiver definido como true*/}
      </div>
      <div style={{display: "flex", gap: '10px'}}> {/*div com um estilo flex que faz os botões ficarem um lado do outro e terem 10 pixels de distancia entre um e o outro. Ele ta com os botoes que serão routes para as outras paginas*/}
        <Link to="/" className="previous">Back &raquo;</Link>
        <Link to="/name" className="next">Next &raquo;</Link>

      </div>
      <div>
        <ThemeToggle/> 
      </div>
      </>
    )
  }

  export default MensagemPage