import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
};
export default TodoItem;
