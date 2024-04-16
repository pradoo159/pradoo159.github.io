import { useEffect, useState } from 'react'



export default function Alternative({onClick}) {

const [count, setCount] = useState(0)

  function incrementa() {
    setCount(count + 1)
  }

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`
  })

  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={incrementa}>Clique aqui para incrementar: {count}</button>
      <button onClick={onClick}>Voltar para a Home</button>
    </>
  )
}