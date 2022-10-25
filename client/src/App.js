import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Landing from './components/Landing'
import { Routes, Route } from 'react-router-dom'

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
    items: {
      itemId: ''
    }
  })

  useEffect(() => {
    const apiCall = async () => {
      let listResponse = await axios.get('http://localhost:3001/lists')
      setLists(listResponse.data)
      let itemResponse = await axios.get('http://localhost:3001/items')
      setItems(itemResponse.data)
    }

    apiCall()
  }, [])

  return (
    <div className="App">
      <header>📝 WISH LIST 📝</header>
      <main>
        <Routes>
          <Route path="/" element={<Landing lists={lists} items={items} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
