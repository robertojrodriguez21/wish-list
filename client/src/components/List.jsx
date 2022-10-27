import {Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Items from './Items'

const List = (props) => {
  const [list, setList] = useState('')
  let {listId} = useParams()

  useEffect(() => {
    let selectedList = props.lists.find((list)=>list._id === listId)

    setList(selectedList)
  }, [props.lists, listId])

  return list ? (
    <div>
      <div className='breadcrumbs'>
        <Link to={'/'}>ALL LISTS</Link>
      </div>
      <div className='list-buttons'>
        <button className='add-item-button'>Add Item</button>
        <button className='delete-list-button'>Delete List</button>
      </div>
      <div className='detailed-list'>
        <div className='list-name'>{list.name}</div>
        {props.items.map((item) => (
        <div className="item-card">
          {list.items.includes(item._id) 
          ? <Items key={item._id} listId={list._id} item={item} />
          : null}
        </div>
      ))}
      </div>
    </div>
  ) : null
}

export default List