import UpdateItem from "./UpdateItem"

const Item = (props) => {
  let itemSeleceted = false

  if (!itemSeleceted) {
    return (
      <div className="item-card">
        <div className="item-name">
          {props.item.name}
        </div>
        <UpdateItem />
      </div>
    )
    } else {

    }
}

export default Item