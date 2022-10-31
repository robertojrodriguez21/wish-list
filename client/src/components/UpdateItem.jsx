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

  // Form Submit Function
  const handleSubmit = async (e) => {
    await props.updateItem(item, e)
    navigate(`/list/${list._id}/item/${item._id}`)
    window.location.reload(false)
  }

  const updatedItem = props.updatedItem

  return list && item ? (
    <div>
      <div className='breadcrumbs'>
        <Link to={'/'}>HOME</Link> {'>'} <Link to={`/list/${list._id}`}>{list.name.toUpperCase()}</Link> {'>'} <Link to={`/list/${list._id}/item/${item._id}`}>{item.name.toUpperCase()}</Link> {'>'} EDIT ITEM
      </div>
      <div className='edit-item-title'>Edit {item.name}</div>
      <form className='edit-item-form' onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type='text' placeholder={item.name} value={updatedItem.name} onChange={props.handleUpdateItemChange} name={'name'}></input>
        <br></br><br></br>
        <label>Description: </label>
        <input type='text' placeholder={item.description} value={updatedItem.description} onChange={props.handleUpdateItemChange} name={'description'}></input>
        <br></br><br></br>
        <label>Image Link: </label>
        <input type='text' placeholder={item.image} value={updatedItem.image} onChange={props.handleUpdateItemChange} name={'image'}></input>
        <br></br><br></br>
        <label>Budget: </label>
        <input type='text' placeholder={item.budget} value={updatedItem.budget} onChange={props.handleUpdateItemChange} name={'budget'}></input>
        <br></br><br></br>
        <button className='add-item-button'>Edit Item</button>
      </form>
    </div>
  ) : null
}

export default UpdateItem