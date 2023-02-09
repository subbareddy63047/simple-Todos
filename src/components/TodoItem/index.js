// Write your code here
import './index.css'

const TodoItem = props => {
  const {Item, deleteUser} = props
  const {title, id} = Item
  const onDelete1 = () => {
    deleteUser(id)
  }

  return (
    <li className="subbu">
      <div className="para-container">
        <p className="list-a">{title}</p>
      </div>
      <div className="buttons-conatainer">
        <button type="button" className="button1" onClick={onDelete1}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
