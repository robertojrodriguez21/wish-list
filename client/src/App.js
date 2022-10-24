import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'

function App() {
  const [items, setItems] = useState([])
  const [lists, setLists] = useState([])
  const [itemFormState, setItemFormState] = useState({
    name: '',
    description: '',
    image: '',
    budget: '',
    links: [
      {
        websiteName: '',
        websiteLink: ''
      }
    ]
  })
  const [listFormState, setListFormState] = useState({
    name: '',
    items: [
      {
        itemId: ''
      }
    ]
  })

  return (
    <div className="App">
      <h1>📝 WISH LIST 📝</h1>
      <Landing />
    </div>
  )
}

export default App
