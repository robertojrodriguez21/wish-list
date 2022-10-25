import Item from "./Item"

const Items = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        props.listItems.includes(item._id) 
        ? <Item item={item} />
        : null
      ))}
    </div>
  )
}

export default Items