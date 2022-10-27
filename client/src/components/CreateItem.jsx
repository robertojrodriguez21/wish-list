import {Link, useParams, useNavigate} from 'react-router-dom'

const CreateItem = (props) => {
  let navigate = useNavigate()
  const {listId} = useParams()
  let list
  
  props.lists.map((inList) => {
    if (inList._id === listId) {
      list = inList
    }
  })

  const handleSubmit = (e) => {
    props.addItem(e)
    navigate(`/list/${list._id}`)
    window.location.reload(false)
  }

  const newItem = props.newItem

  return list ? (
    <div>
      <div className='breadcrumbs'>
        {console.log(list)}
        <Link to={'/'}>HOME</Link> {'>'} <Link to={`/list/${list._id}`}>{list.name.toUpperCase()}</Link> {'>'} ADD ITEM
      </div>
      <h1>Add Item to {list.name}</h1>
      <form className='item-form' onSubmit={handleSubmit}>
        <label>Item Name: </label>
        <input type='text' value={newItem.name} onChange={props.handleItemChange} name={'name'}></input>
        <br></br><br></br>
        <label>Item Description: </label>
        <input type='text' value={newItem.description} onChange={props.handleItemChange} name={'description'}></input>
        <br></br><br></br>
        <label>Item Image Link: </label>
        <input type='text' value={newItem.image} onChange={props.handleItemChange} name={'image'}></input>
        <br></br><br></br>
        <label>Item Budget: </label>
        <input type='text' value={newItem.budget} onChange={props.handleItemChange} name={'budget'}></input>
        <br></br><br></br>
        <label>Item Website Name: </label>
        <input type='text' value={newItem.websiteName} onChange={props.handleItemChange} name={'websiteName'}></input>
        <br></br><br></br>
        <label>Item Website Link: </label>
        <input type='text' value={newItem.websiteLink} onChange={props.handleItemChange} name={'websiteLink'}></input>
        <br></br><br></br>
        <button className='add-item-button'>Add Item</button>
      </form>
    </div>
  )
  : null
}

export default CreateItem