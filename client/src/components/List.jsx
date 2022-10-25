import CreateItem from './CreateItem'
import Items from './Items'

const List = (props) => {
  return (
    <div className='list-card'>
      <div className='list-name'>
        {props.name}
      </div>
      <CreateItem />
      <Items listItems={props.list.items} items={props.items}/>
    </div>
  )
}

export default List