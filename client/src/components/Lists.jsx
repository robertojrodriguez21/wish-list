import List from "./List"

const Lists = (props) => {
  return (
    <div>
      {props.lists.map((list) => (
        <h4>{list.name}</h4>
      ))}
      <List />
    </div>
  )
}

export default Lists