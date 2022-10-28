import {Link, useParams, useNavigate} from 'react-router-dom'

const UpdateItem = (props) => {
  let navigate = useNavigate()
  const {listId, itemId} = useParams()
  let list
  let item
  
  props.lists.map((inList) => {
    if (inList._id === listId) {
      list = inList
    }
  })

  props.items.map((inItem) => {
    if (inItem._id === itemId) {
      item = inItem
    }
  })

  return (
    <div>
      <div className='breadcrumbs'>
        <Link to={'/'}>HOME</Link> {'>'} <Link to={`/list/${list._id}`}>{list.name.toUpperCase()}</Link> {'>'} <Link to={`/list/${list._id}/item/${item._id}`}>{item.name.toUpperCase()}</Link> {'>'} EDIT ITEM
      </div>
    </div>
  )
}

export default UpdateItem