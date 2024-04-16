import { useState } from 'react'
import Alternative from './components/Alternative/Alternative'
import Home from './components/Home/Home'
import SideMenu from './components/SideMenu/SideMenu'
import './index.scss'
import GeradorFatos from './components/GeradorFatos/GeradorFatos'
import MainMenu from './components/MainMenu/MainMenu'


function App() {

  const [component, setComponent] = useState(<Home />)

  const pages =
    [{
      name: 'Home',
      action: () => {
        setComponent(<Home />)
      }
    },
    {
      name: 'Gerador',
      action: () => {
        setComponent(<GeradorFatos />)
      }
    },
    {
      name: 'Alternativa',
      action: () => {
        setComponent(<Alternative />)
      }
    }]

    pages.map(page => {
      console.log(page.name)
    })


  return (
    <>
      <MainMenu pages={pages} />
      <div id="container">
        {component}
      </div>
    </>
  )
}



export default App
