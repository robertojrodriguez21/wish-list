import {Link} from 'react-router-dom'

const Item = (props) => {
  return (
    <div>
      <div className='breadcrumbs'>
        <Link to={'/'}>ALL LISTS</Link> {'>'} <Link></Link>
      </div>
    </div>
  )
}

export default Item