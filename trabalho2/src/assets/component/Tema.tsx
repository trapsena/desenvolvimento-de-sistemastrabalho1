import React, { useState, useEffect } from 'react';
import '../../index.css'

export function ThemeToggle() { //fala pra pagina salvar o tema da pagina no local storage, ou utilizar o light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.className = ''; //aqui pe o html da pagina ele tira o que  tiver no class name e adiciona o que tiver no theme sendo eles o .dark e o .light
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => { //aqui ele altera a variavel theme de dark pra light e salva ela no local storage pra ser usado em outras pagina
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <div className='theme-toggle'> {/*aqui é o botão de troca de tema quese o tema for light vai virar dark e se dark vai ser light, quando clica nele é ativado o toggleTheme. ele tambem esta chamando uma classe theme toggle que posiciona o botão no canto superior direito*/}
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
    </div>
  );
}

export default ThemeToggle;