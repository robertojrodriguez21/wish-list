import Lists from "./Lists"
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Landing = (props) => {
  return (
    <div>
      <button className="create-list-button"><Link to='/createList'>+ Create List</Link></button>
      <Lists lists={props.lists} items={props.items} />
    </div>
  )
}

export default Landing