import {Link, useParams, useNavigate} from 'react-router-dom'

const CreateItem = (props) => {
  let navigate = useNavigate()

  // Sets List for page
  const {listId} = useParams()
  let list
  
  props.lists.map((inList) => {
    if (inList._id === listId) {
      list = inList
    }
  })

  // Create Item and Update List Function
  const handleSubmit = async (e) => {
    await props.addItem(e)
    await props.updateList(list._id, e)
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
      <div className='create-item-title'>Add Item to {list.name}</div>
      <form className='create-item-form' onSubmit={handleSubmit}>
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
      </form>
    </div>
  )
  : null
}

export default CreateItem