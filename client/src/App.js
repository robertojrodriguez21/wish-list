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
  // Sets Items and Lists
  useEffect(() => {
    const apiCall = async () => {
      let listResponse = await axios.get('http://localhost:3001/lists')
      setLists(listResponse.data)
      let itemResponse = await axios.get('http://localhost:3001/items')
      setItems(itemResponse.data)
    }

    apiCall()
  }, [])

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
  const [updatedItem, setUpdatedItem] = useState({
    name: '',
    description: '',
    image: '',
    budget: ''
  })
  const [newList, setNewList] = useState({
    name: ''
  })
  const [newLink, setNewLink] = useState({
    websiteName: '',
    websiteLink: ''
  })

  // Input Handlers
  const handleItemChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }

  const handleListChange = (e) => {
    setNewList({ ...newList, [e.target.name]: e.target.value })
  }

  const handleLinkChange = (e) => {
    setNewLink({ ...newLink, [e.target.name]: e.target.value })
  }

  const handleUpdateItemChange = (e) => {
    setUpdatedItem({ ...updatedItem, [e.target.name]: e.target.value })
  }

  // Item API Calls
  // Create Item
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

    await axios.post('/list/:listId/createItem', createdItem)
  }

  // Add Link to Item
  const addLink = async (itemId, e) => {
    e.preventDefault()
    const createdLink = {
      websiteName: newLink.websiteName,
      websiteLink: newLink.websiteLink
    }

    axios.put(`/list/:listId/item/${itemId}`, createdLink)
  }

  // Update Item
  const updateItem = async (itemId, e) => {
    e.preventDefault()
    const updatedItemBody = {
      name: updatedItem.name,
      description: updatedItem.description,
      image: updatedItem.image,
      budget: parseInt(updatedItem.budget)
    }

    await axios.put(`/list/:listId/item/${itemId}/updateItem`, updatedItemBody)
  }

  // Delete Item
  const deleteItem = (itemId, e) => {
    e.preventDefault()
    axios.delete(`/list/:listId/item/${itemId}`)
  }

  // List API Calls
  // Create List
  const addList = (e) => {
    e.preventDefault()
    const createdList = {
      name: newList.name
    }

    axios.post('/createList', createdList)
  }

  // Update List
  const updateList = async (listId, e) => {
    e.preventDefault()
    axios.put(`/list/${listId}/createItem`)
  }

  // Delete List
  const deleteList = (listId, e) => {
    e.preventDefault()
    axios.delete(`/list/${listId}`)
  }

  // Main
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
            element={
              <Item
                lists={lists}
                items={items}
                handleLinkChange={handleLinkChange}
                deleteItem={deleteItem}
                newLink={newLink}
                addLink={addLink}
              />
            }
          />
          <Route
            path="/list/:listId/item/:itemId/updateItem"
            element={
              <UpdateItem
                lists={lists}
                items={items}
                handleUpdateItemChange={handleUpdateItemChange}
                updatedItem={updatedItem}
                updateItem={updateItem}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
