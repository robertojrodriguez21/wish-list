import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

const Items = (props) => {
  return (
    <div className="item-card-name">
      <Link to={`/${props.listId}/${props.item._id}`}>{props.item.name}</Link>
    </div>
  )
}

export default Items