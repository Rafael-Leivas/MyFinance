import React from 'react'
import st from './Table.module.css'

const Table = ({transacoes}) => {
  return (
    <div className={st.content}>
      <table className={st.table}>
          <thead>
            <tr>
              <th>Código</th>
              <th>Descrição</th>
              <th>Entrada</th>
              <th>Saída</th>
              <th>Total</th>
            </tr>
          </thead>
          
          <tbody>
            {transacoes.map((transacao) => (
              <tr key={transacao.codigo}>
                <td>{transacao.codigo}</td>
                <td>{transacao.descricao}</td>
                <td>{transacao.entrada}</td>
                <td>{transacao.saida}</td>
                <td>{transacao.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Table
