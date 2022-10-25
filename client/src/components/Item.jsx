import UpdateItem from "./UpdateItem"

const Item = (props) => {
  return (
    <div className="item-card">
      <div className="item-name">
        {props.item.name}
      </div>
      <UpdateItem />
    </div>
  )
}

export default Item