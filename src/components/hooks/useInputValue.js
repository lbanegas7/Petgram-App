import { useState } from 'react'

export const useInputValue = valueInitial => {
  const [value, setValue] = useState(valueInitial)
  const onChange = (e) => setValue(e.target.value)

  return { value, onChange }
}
