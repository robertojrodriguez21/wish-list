import {useNavigate, Link} from 'react-router-dom'

const CreateList = (props) => {
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    props.addList(e)
    navigate('/')
    window.location.reload(false)
  }

  const newList = props.newList

  return (
    <div>
      <div className='breadcrumbs'>
        <Link to={'/'}>HOME</Link> {'>'} CREATE LIST
      </div>
      <div className='create-list-title'>Create a New List</div>
      <form className="create-list-form" onSubmit={ handleSubmit }>
        <label>List Name: </label>
        <input type='text' value={newList.name} onChange={props.handleListChange} name={'name'}></input>
        <br></br><br></br>
        <button className="create-list-button">Create List</button>
      </form>
    </div>
  )
}

export default CreateList