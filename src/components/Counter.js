import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Increment +1</button>
      <p>Vous avez cliqué {count} fois.</p>
    </>
  )
}

export default Counter
