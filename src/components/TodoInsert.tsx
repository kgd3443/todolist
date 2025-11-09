import { useState, type ChangeEvent, type FormEvent } from 'react'

export default function TodoInsert({ onAdd }: { onAdd: (text: string) => void }) {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = value.trim()
    if (!text) return
    onAdd(text)
    setValue('')
  }

  return (
    <form className="insert" onSubmit={onSubmit}>
      <input
        aria-label="할 일을 입력하세요"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">추가</button>
    </form>
  )
}
