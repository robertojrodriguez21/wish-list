import {Link, useParams} from 'react-router-dom'

const Item = (props) => {
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
        <Link to={'/'}>HOME</Link> {'>'} <Link to={`/list/${list._id}`}>{list.name.toUpperCase()}</Link> {'>'} {item.name.toUpperCase()}
      </div>
      <div className='list-buttons'>
        <button className='edit-item-button'><Link to={`/list/${list._id}/item/${item._id}/updateItem`}>Edit Item</Link></button>
        <button className='delete-item-button'>Delete Item</button>
      </div>
      <div>
        <h1>{item.name}</h1>
        <h3>{item.description}</h3>
        <h2>Budget: {item.budget}</h2>
        <img src={item.image} alt={item.name}></img>
        {item.links.forEach(link => (
          <h2 href={link.websiteLink}>{link.websiteName}</h2>
        ))}
      </div>
    </div>
  )
}

export default Item