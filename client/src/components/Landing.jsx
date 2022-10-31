import Lists from "./Lists"
import {Link} from 'react-router-dom'

const Landing = (props) => {
  return (
    <div>
      <div className="breadcrumbs">HOME</div>
      <button className="create-list-button"><Link to='/createList'>Create List</Link></button>
      <div className="all-list-cards">
        {props.lists.map((list) => (
          <Lists key={list._id} list={list} items={props.items} deleteItem={props.deleteItem}/>
        ))}
      </div>
    </div>
  )
}

export default Landing