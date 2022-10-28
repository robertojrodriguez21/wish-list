import {Link, useParams, useNavigate} from 'react-router-dom'
import { useState } from 'react'

const Item = (props) => {
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

  const handleSubmit = async (e) => {
    await props.addLink(e)
    navigate(`/`)
    navigate(`/list/${list._id}/item/${item._id}`)
    window.location.reload(false)
  }

  const handleDeleteItem = async (e) => {
    await props.deleteItem(item._id, e)
    navigate(`/list/${list._id}`)
    window.location.reload(false)
  }

  const newLink = props.newLink

  return item && list ? (
    <div>
      <div className='breadcrumbs'>
        <Link to={'/'}>HOME</Link> {'>'} <Link to={`/list/${list._id}`}>{list.name.toUpperCase()}</Link> {'>'} {item.name.toUpperCase()}
      </div>
      <div className='list-buttons'>
        <button className='edit-item-button'><Link to={`/list/${list._id}/item/${item._id}/updateItem`}>Edit Item</Link></button>
        <button className='delete-item-button' onClick={handleDeleteItem}>Delete Item</button>
      </div>
      <div className='item-details'>
        <div className='item-img'><img src={item.image} alt={item.name}></img></div>
        <div className='item-name'>{item.name}</div>
        <div className='item-description'>{item.description}</div>
        <div className='item-budget'>Budget: ${item.budget}</div>
        <div className='item-links-header'>My Links</div>
        {item.links.map(link => (
          <div className='item-link'><a href={link.websiteLink} target="_blank">{link.websiteName}</a></div>
        ))}
      </div>
      <div className='item-add-link-header'>Add Link</div>
      <form className='item-add-link-form' onSubmit={handleSubmit}>
        <label>Website Name: </label>
        <input type='text' value={newLink.websiteName} onChange={props.handleLinkChange} name={'websiteName'}></input>
        <br></br><br></br>
        <label>Website Link: </label>
        <input type='text' value={newLink.websiteLink} onChange={props.handleLinkChange} name={'websiteLink'}></input>
        <br></br><br></br>
        <button className='add-link-button'>Add Link</button>
      </form>
    </div>
  ) : null
}

export default Item