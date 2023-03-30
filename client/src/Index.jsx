import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import "./style/index.css"

function Index() {

  return (

    <div className="principal-container">

      <Outlet />


    </div>
  )
}

export default Index
