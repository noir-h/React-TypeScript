import React, { useState } from 'react'

interface Props {
  text: string
}
interface UserData {
  id: number
  name: string
}
const Basic1: React.VFC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(null)
  const [user, setUser] = useState<UserData>({ id: 3, name: 'sora' })
  const [inputData, setInputData] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputData(e.target.value)
  return (
    <>
      {/* flagment */}
      <h1>Hello {props.text}</h1>
      <input type="text" value={inputData} onChange={handleInputChange} />
      <h1>{inputData}</h1>
    </>
  )
}

export default Basic1
