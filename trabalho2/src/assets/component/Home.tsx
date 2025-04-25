import { useState } from "react";
import ThemeToggle from "./Tema";
import { Link } from 'react-router-dom';


export function Home(){
  
  return(
    <>
        <h1>Trap's first site :D</h1>
        <Link to="/message" className="next">Next &raquo;</Link>

        <div>
        <ThemeToggle/>
        </div>
        </>
  )
}
export default Home