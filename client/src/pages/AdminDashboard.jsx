import React, { useState } from 'react'
import AdminTables from '../components/AdminTables'
import { CreateArticleModal } from '../components/modals/CreateArticleModal'

export function AdminDashboard() {
  const [showCreateArticleModal, setShowCreateArticleModal] = useState(false)


  return (
    <div>
      <button onClick={() => setShowCreateArticleModal(true)}>abrir modal</button>


      <CreateArticleModal
        showModal={showCreateArticleModal}
        hideModal={() => setShowCreateArticleModal(false)}
        status={showCreateArticleModal}
      />
      <AdminTables param="allArticles"/>

    </div>
  )
}



//allArticles
//getUsers