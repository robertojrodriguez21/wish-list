import CreateList from "./CreateList";
import Lists from "./Lists"

const Landing = (props) => {
  return (
    <div>
      <CreateList />
      <Lists lists={props.lists} items={props.items} />
    </div>
  )
}

export default Landing