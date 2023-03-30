import React, { useState, useEffect } from 'react'
import AdminTables from '../components/AdminTables'
import { CreateArticleModal } from '../components/modals/CreateArticleModal'
import '../style/admin.css'


export default function AdminDashboard() {
  const [showCreateArticleModal, setShowCreateArticleModal] = useState(false)
  const [changeInfo, setChangeInfo] = useState('')



  useEffect(() =>{
  console.log(changeInfo)

},[changeInfo])

  return (
    <main className="main-admin">
      <div className= "admin-field text-center">

        <h2 className="text-center mb-5">{`Olá, Administrador! Seja bem vindo!`}</h2>

        <div className="buttons-admin">
        <button className="btn btn-admin btn-one fw-medium mt-3" onClick={() => setChangeInfo('article')}> Gerenciar artigos </button>
        <button className="btn btn-admin btn-two fw-medium mt-3" onClick={() => setChangeInfo('user')}> Gerenciar usuários </button>
        <button className="btn btn-admin btn-three fw-medium mt-3" onClick={() => setChangeInfo('expenses')}> Gerenciar tipos de despesas </button>
        </div>

        {changeInfo == 'article'? (<>
            <CreateArticleModal
            showModal={showCreateArticleModal}
            hideModal={() => setShowCreateArticleModal(false)}
            status={showCreateArticleModal}
          />
          <AdminTables param="allArticles"/></>) : 
          changeInfo == 'user'? (<AdminTables param="getUsers"/>) : (
            <div className='mt-3'></div>

          )}

      {/* <button onClick={() => setShowCreateArticleModal(true)}>Adicionar Artigo</button> */}

 




      </div>
   </main>
  )
}



//allArticles
//getUsers