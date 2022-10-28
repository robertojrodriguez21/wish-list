import {Link, useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Items from './Items'

const List = (props) => {
  let navigate = useNavigate()
  const [list, setList] = useState('')
  let {listId} = useParams()

  useEffect(() => {
    let selectedList = props.lists.find((list) => list._id === listId)

    setList(selectedList)
  }, [props.lists, listId])

  const handleDeleteList = async (e) => {
    await props.deleteList(list._id, e)
    navigate('/')
    window.location.reload(false)
  }

  return list ? (
    <div>
      <div className='breadcrumbs'>
        <Link to={'/'}>HOME</Link> {'>'} {list.name.toUpperCase()}
      </div>
      <div className='list-buttons'>
        <button className='add-item-button'><Link to={`/list/${list._id}/createItem`}>Add Item</Link></button>
        <button className='delete-list-button' onClick={handleDeleteList}>Delete List</button>
      </div>
      <div className='detailed-list'>
        <div className='list-name'>{list.name}</div>
        {props.items.map((item) => (
          list.items.includes(item._id) 
          ? <div className="item-card"><Items key={item._id} listId={list._id} item={item} /></div>
          : null
      ))}
      </div>
    </div>
  ) : null
}

export default List