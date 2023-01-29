// Write your code here
import './index.css'

const TodoItem = props => {
  const {userTodos} = props
  const {title, id, deleteTodo} = userTodos

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="item">
      <p className="description"> {title} </p>
      <button className="button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
