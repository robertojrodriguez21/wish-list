import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

const Items = (props) => {
  return (
    <div className="item-card-name">
      <div><button className='delete-link-button'>X</button></div>
      <div className='item-name'><Link to={`/list/${props.listId}/item/${props.item._id}`}>{props.item.name}</Link></div>
    </div>
  )
}

export default Items