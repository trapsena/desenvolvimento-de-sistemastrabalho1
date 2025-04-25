import {useNavigate} from 'react-router' //mesmo codigo da aula passada onde usamos o use navigate para ir devolta para a pagina principal em caso de o usuario ir para uma pagina errada

export default function NotFound () {
    const navigation = useNavigate();

    return(
        <div>
            <h2>Error page</h2>
            <button onClick={() => navigation('/')}>Pagina Inicial </button>
        </div>
        
    )
};