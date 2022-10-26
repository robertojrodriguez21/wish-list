import {useNavigate} from 'react-router-dom'

const CreateList = (props) => {
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    props.addList(e)
    navigate('/')
  }

  const newList = props.newList

  return (
    <div>
      <h1>Create a New List</h1>
      <form className="list-form" onSubmit={ handleSubmit }>
        <label>List Name: </label>
        <input type='text' value={newList.name} onChange={props.handleListChange} name={'name'}></input>
        <br></br><br></br>
        <button className="create-list-button">Create List</button>
      </form>
    </div>
  )
}

export default CreateList