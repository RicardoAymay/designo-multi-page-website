import { Outlet } from "react-router-dom"
import './styles/app.sass'
const App = () => {
  return (
    
    <div className="app"> 
      <Outlet />
    </div>
  )
}



export default App
