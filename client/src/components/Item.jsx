import {Link} from 'react-router-dom'

const Item = (props) => {
  return (
    <div>
      <div className='breadcrumbs'>
        <Link to={'/'}>Home</Link> {'>'} <Link></Link>
      </div>
    </div>
  )
}

export default Item