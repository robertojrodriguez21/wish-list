import {Link, useNavigate} from 'react-router-dom'

const Items = (props) => {
  let navigate = useNavigate()

  // Delete Item Function
  const handleDeleteItem = async (e) => {
    await props.deleteItem(props.item._id, e)
    navigate(`/`)
    window.location.reload(false)
  }

  return (
    <div className="item-card-name">
      <div><button className='quick-delete-item-button' onClick={handleDeleteItem}>X</button></div>
      <div className='item-name'><Link to={`/list/${props.listId}/item/${props.item._id}`}>{props.item.name}</Link></div>
    </div>
  )
}

export default Items