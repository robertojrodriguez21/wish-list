import {Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

const List = (props) => {
  const [list, setList] = useState('')
  let {listId} = useParams()

  useEffect(() => {
    let selectedList = props.lists.find((list)=>list._id === listId)

    setList(selectedList)
  }, [props.lists, listId])

  return list ? (
    <div>
      <div className='breadcrumbs'>
        <Link to={'/'}>ALL LISTS</Link>
      </div>
      <div>
        <div className='list-name'>{list.name}</div>
      </div>
    </div>
  ) : null
}

export default List