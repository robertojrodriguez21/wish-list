import { Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Landing from './components/Landing'
import CreateList from './components/CreateList'
import Item from './components/Item'

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
      <header>
        <Link to={'/'}>📝 WISH LIST 📝</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing lists={lists} items={items} />} />
          <Route path="/createList" element={<CreateList />} />
          <Route path="/:listId/:itemId" element={<Item />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
