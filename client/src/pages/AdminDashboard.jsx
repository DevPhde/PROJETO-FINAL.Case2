import React, { useState } from 'react'
import Articles from '../components/Articles'
import { CreateArticleModal } from '../components/modals/CreateArticleModal'

export function AdminDashboard() {
  const [showCreateArticleModal, setShowCreateArticleModal] = useState(false)


  return (
    <div>
      <button onClick={() => setShowCreateArticleModal(true)}>abrir modal</button>


      <CreateArticleModal
        showModal={showCreateArticleModal}
        hideModal={() => setShowCreateArticleModal(false)}
      />
      <Articles param="allArticles"/>


    </div>
  )
}