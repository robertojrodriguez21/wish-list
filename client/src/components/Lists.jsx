import List from "./List"

const Lists = (props) => {
  return (
    <div>
      {props.lists.map((list) => (
        <List name={list.name} list={list} items={props.items}/>
      ))}
    </div>
  )
}

export default Lists