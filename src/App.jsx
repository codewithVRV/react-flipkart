
import './App.css'
import Header from './Components/Header/Header'
import MainRoutes from './Routes/MainRoutes'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div>
      <Header />
      <MainRoutes />
      <Toaster />
    </div>
  )
}

export default App
