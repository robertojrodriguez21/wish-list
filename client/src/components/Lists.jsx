import {Link} from 'react-router-dom'
import {useState} from 'react'
import Items from "./Items"

const Lists = (props) => {
  const items = props.items

  return (
    <div className="list-card">
      <div className="list-card-name">
        <Link to={`/list/${props.list._id}`}>{props.list.name}</Link>
      </div>
      {props.items.map((item) => (
        props.list.items.includes(item._id) 
        ? <div className="item-card">{<Items key={item._id} listId={props.list._id} item={item} deleteItem={props.deleteItem} />}</div>
        : null
      ))}
    </div>
  )
}

export default Lists