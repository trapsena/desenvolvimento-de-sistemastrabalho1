import React, { useState } from 'react';
import ThemeToggle from './Tema';
import { Link } from 'react-router-dom';

export function NameInput() {
    const [name, setName] = useState('');

    return (
      <>

      <div>
        <h1>Hello, {name || 'stranger'}!</h1> {/*Quando inciciar o site ao invez dele ler o valor de name ele vai estar escrito como stranger até ser autualizado*/}
        <div style={{marginBottom:'15px'}}>
        <input  
          type="text" 
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)} //toda vez que o input tiver algua mudança o evento vai ser ativado e a variavel nome tera um novo valor, por causa disso apos da primeira letra o nome sera toda vez autualizado
        />
        </div>
      </div>

      <div style={{display: "flex", gap: '10px',justifyContent: 'center'}}>
        <Link to="/message" className="previous">Back &raquo;</Link>
        <Link to="/list" className="next">Next &raquo;</Link>
      </div>

      <div><ThemeToggle/></div>
      </>
    );
  }{/*o input vai ter o tipo de texto e seu valor sendo o nome igual ao do function*/}
