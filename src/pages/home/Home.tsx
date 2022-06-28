import React from 'react';
import './Home.css';

function Home() { //ATENÇÃO: Um Componente só irá poder retornar UM ELEMENTO! Se quiser mais
    return( // de um, precisa colocar eles dentro de um Container!!!
        <>
            <h1 className="titulo">Home</h1>
            <img src="https://i.imgur.com/H88yIo2.png" alt="Imagem de Tela Inicial" className="img"/>
        </>
    );
}

export default Home;