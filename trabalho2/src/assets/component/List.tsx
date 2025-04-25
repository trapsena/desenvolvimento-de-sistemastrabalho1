    import React, { useState } from "react";
import ThemeToggle from "./Tema";
import { Link } from "react-router-dom";

    function ListOfFriends() { 

        const [friends,setFriends] = useState(["Billy Kid","Anby Demara","Nicole Demara"]); //cria uma lista e faz um setlista pra autualizar ela

        function addFriend(){ 
            const newFriend = document.getElementById("friendInput").value; //ao clicar no botão a função vai ler o id do input que foi definido como o texto e fazer el ser a variavel new friend
            document.getElementById("friendInput").value=""; //o id é tudo o qe esta dentro da caixa de input então apos escrita definimos o id com nada para limpar a caixa

            setFriends(f=> [...f,newFriend]); //depois usamos o setfriends com um ...f para pegar o ultimo estado da lista e adicionar o valor de new friend
        }

        
        return(
            <>
                <div>
                    <h2>Lista de Amigos</h2>{/*friends map vai receber os index da lista de amigos e colocalos na lista*/}
                    <ul>
                        {friends.map((friend, index) => <li key={index}>{friend}</li>)}
                    </ul>
                    <div style={{marginBottom:'15px'}}>
                        <input type="text" id="friendInput" placeholder="Tem algum outro amigo?"/> {/*Coloca um input que ele sera usado para ter escrever os amigos novos*/}
                        <button onClick={addFriend}>Add Amigo</button> {/*faz um botão que tova vez que clicar vai fazer a função adicionar um amigo*/}
                    </div>
                    

                </div>
                <div style={{display: "flex", gap: '10px', justifyContent: 'center'}}>
                    <Link to="/message" className="previous">Back &raquo;</Link>
                    <Link to="/counter" className="next">Next &raquo;</Link>
                </div>
                <div> 
                    <ThemeToggle/>
                </div>
            </>
        );
    }
    export default ListOfFriends