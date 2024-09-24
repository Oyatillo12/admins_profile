import './App.css'
import Navbar from "./components/Navbar"
import CustomRoutes from './routes'

function App() {

  return (
    <div className='flex'>
     <Navbar/>
     <CustomRoutes/>
    </div>
  )
}

export default App
