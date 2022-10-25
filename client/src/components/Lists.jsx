import List from "./List"

const Lists = (props) => {
  return (
    <div className="all-list-cards">
      {props.lists.map((list) => (
        <List key={list._id} name={list.name} list={list} items={props.items}/>
      ))}
    </div>
  )
}

export default Lists