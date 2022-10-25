import { useEffect, useState } from 'react'
import axios from 'axios'
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
      <Landing lists={lists} items={items} />
      {console.log(lists, items)}
    </div>
  )
}

export default App
