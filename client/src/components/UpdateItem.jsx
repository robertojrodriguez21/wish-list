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
      {/* <form className='item-form' onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type='text' value={newItem.name} onChange={props.handleItemChange} name={'name'}></input>
        <br></br><br></br>
        <label>Description: </label>
        <input type='text' value={newItem.description} onChange={props.handleItemChange} name={'description'}></input>
        <br></br><br></br>
        <label>Image Link: </label>
        <input type='text' value={newItem.image} onChange={props.handleItemChange} name={'image'}></input>
        <br></br><br></br>
        <label>Budget: </label>
        <input type='text' value={newItem.budget} onChange={props.handleItemChange} name={'budget'}></input>
        <br></br><br></br>
        <label>Website Name: </label>
        <input type='text' value={newItem.websiteName} onChange={props.handleItemChange} name={'websiteName'}></input>
        <br></br><br></br>
        <label>Website Link: </label>
        <input type='text' value={newItem.websiteLink} onChange={props.handleItemChange} name={'websiteLink'}></input>
        <br></br><br></br>
        <button className='add-item-button'>Add Item</button>
      </form> */}
    </div>
  )
}

export default UpdateItem