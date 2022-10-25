import Items from "./Items"

const Lists = (props) => {
  return (
    <div className="list-card">
      <div className="list-name">
        {props.list.name}
      </div>
      {props.items.map((item) => (
        <div className="item-card">
          {props.list.items.includes(item._id) 
          ? <Items key={item._id} item={item} />
          : null}
        </div>
      ))}
    </div>
  )
}

export default Lists