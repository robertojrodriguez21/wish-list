import { Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Landing from './components/Landing'
import CreateList from './components/CreateList'
import CreateItem from './components/CreateItem'
import List from './components/List'
import Item from './components/Item'

function App() {
  const [items, setItems] = useState([])
  const [lists, setLists] = useState([])
  const [newItem, setNewItem] = useState({
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
  const [newList, setNewList] = useState({
    name: ''
  })

  const addList = (e) => {
    e.preventDefault()
    const createdList = {
      name: newList.name
    }

    axios.post('/createList', createdList)
  }

  const deleteList = (listId, e) => {
    e.preventDefault()
    axios.delete(`/${listId}`)
  }

  const handleListChange = (e) => {
    setNewList({ ...newList, [e.target.name]: e.target.value })
  }

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
          <Route
            path="/createList"
            element={
              <CreateList
                newList={newList}
                handleListChange={handleListChange}
                addList={addList}
              />
            }
          />
          <Route path="/:listId/createItem" element={<CreateItem />} />
          <Route
            path="/:listId"
            element={
              <List deleteList={deleteList} lists={lists} items={items} />
            }
          />
          <Route path="/:listId/:itemId" element={<Item />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
