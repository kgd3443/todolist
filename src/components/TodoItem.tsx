import type { Todo } from '../types'

export default function TodoItem({
  todo,
  onToggle,
  onRemove,
}: {
  todo: Todo
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}) {
  return (
    <li className="item">
      <label className="checkbox">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          aria-label={`${todo.text} 완료 여부`}
        />
        <span className={todo.done ? 'text done' : 'text'}>{todo.text}</span>
      </label>
      <button className="remove" aria-label="삭제" onClick={() => onRemove(todo.id)}>
        ✕
      </button>
    </li>
  )
}
