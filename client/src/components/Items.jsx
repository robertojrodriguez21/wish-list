import {Link} from 'react-router-dom'

const Items = (props) => {
  return (
    <div className="item-name">
      <Link to={`.//${props.item._id}`}></Link>
      {props.item.name}
    </div>
  )
}

export default Items