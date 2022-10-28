import { Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Landing from './components/Landing'
import CreateList from './components/CreateList'
import CreateItem from './components/CreateItem'
import List from './components/List'
import Item from './components/Item'
import UpdateItem from './components/UpdateItem'

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

  const addItem = async (e) => {
    e.preventDefault()
    const createdItem = {
      name: newItem.name,
      description: newItem.description,
      image: newItem.image,
      budget: parseInt(newItem.budget),
      links: [
        {
          websiteName: newItem.websiteName,
          websiteLink: newItem.websiteLink
        }
      ]
    }

    const itemForList = await axios.post(
      '/list/:listId/createItem',
      createdItem
    )
    await axios.put('/list/:listId/createItem', itemForList)
  }

  const updateList = async () => {
    await axios.put('/list/:listId/createItem')
  }

  const handleItemChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }

  const addList = (e) => {
    e.preventDefault()
    const createdList = {
      name: newList.name
    }

    axios.post('/createList', createdList)
  }

  const handleListChange = (e) => {
    setNewList({ ...newList, [e.target.name]: e.target.value })
  }

  const deleteList = (listId, e) => {
    e.preventDefault()
    axios.delete(`/list/${listId}`)
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
          <Route
            path="/list/:listId/createItem"
            element={
              <CreateItem
                lists={lists}
                newItem={newItem}
                handleItemChange={handleItemChange}
                addItem={addItem}
                updateList={updateList}
              />
            }
          />
          <Route
            path="/list/:listId"
            element={
              <List deleteList={deleteList} lists={lists} items={items} />
            }
          />
          <Route
            path="/list/:listId/item/:itemId"
            element={<Item lists={lists} items={items} />}
          />
          <Route
            path="/list/:listId/item/:itemId/updateItem"
            element={<UpdateItem />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
