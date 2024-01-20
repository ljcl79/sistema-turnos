
import './App.css'

import Nav from './components/Nav'
import AppProvider from './context/GlobalState'
import Home from './views/Home'

function App() {

  return (
    <AppProvider>
      <Nav></Nav>
      <div className='pt-[10vh]'>
        <Home></Home>
      </div>
    </AppProvider>
  )
}

export default App
