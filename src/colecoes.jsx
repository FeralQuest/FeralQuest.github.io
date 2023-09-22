import React from 'react'
import BasicButton from './basicButton';
import NomeColecao from './nomeColecao';
import './colecoes.css';

const Colecoes = ({srcImage, altImage, nomeColecao}) => {
    return (
      <div className='colecoes'>
        <div className='colecoesImg'>
          <img src={srcImage} alt={altImage} />
        </div>
        <div className='colecoesInfo'>
          <NomeColecao nomeColecao={nomeColecao}/>
          <BasicButton nomeBotao={"VER COLEÇÃO"}/>
        </div>
      </div>
    );
}

export default Colecoes