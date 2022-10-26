import {Link} from 'react-router-dom'
import Items from "./Items"

const Lists = (props) => {
  return (
    <div className="list-card">
      <div className="list-card-name">
        <Link to={`/${props.list._id}`}>{props.list.name}</Link>
      </div>
      {props.items.map((item) => (
        <div className="item-card">
          {props.list.items.includes(item._id) 
          ? <Items key={item._id} listId={props.list._id} item={item} />
          : null}
        </div>
      ))}
    </div>
  )
}

export default Lists