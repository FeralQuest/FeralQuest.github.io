import React from 'react'
import ProdutoMain from './produtoMain';
import "./mainLancamentos.css";

const MainLancamento = () => {
  return (
    <div className='mainLancamentos'>
        <h1>ÚLtimos lançamentos</h1>
        <div className='lancamentos'>
            <ProdutoMain/>
            <ProdutoMain/>
            <ProdutoMain/>
        </div>
    </div>
  )
}

export default MainLancamento;
