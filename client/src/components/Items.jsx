import Item from "./Item"

const Items = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        props.listItems.includes(item._id) 
        ? <Item key={item._id} item={item} />
        : null
      ))}
    </div>
  )
}

export default Items