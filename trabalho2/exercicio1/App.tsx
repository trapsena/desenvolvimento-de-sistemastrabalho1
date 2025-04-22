import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // fiz duas função de incrementa e decrementa pra so coloca nos botão depois

  function inc(){
    setCount(count + 1);
  }
  function dec(){
    setCount(count - 1);
  }
  
  

  return (
    <> 
      <h1>Contador </h1>  
      <h1>{count}</h1>

      <div style={{ display: 'flex', gap: '10px',justifyContent: 'center' }}> {/*o div style display flex é o layout que voce pode colocar coisas uma do lado do outro */}
      <button onClick={() => inc()}> + </button> {/*Botão que chama a função de incremento*/}
      <button onClick={() => dec()}> - </button> {/*Botão que chama a função de decrimento*/}
    </div>
    </>
  )
}

export default App

