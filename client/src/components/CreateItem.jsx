import {Link} from 'react-router-dom'

const CreateItem = (props) => {
  return (
    <div>
      <div className='breadcrumbs'>
        <Link to={'/'}>HOME</Link> {'>'} CREATE LIST
      </div>
    </div>
  )
}

export default CreateItem