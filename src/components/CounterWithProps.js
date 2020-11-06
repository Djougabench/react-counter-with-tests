import React, { useState } from "react"

const Counter = (props) => {
  const { initialCount = 0, increment = 1 } = props
  const [count, setCount] = useState(initialCount)
  return (
    <>
      <button onClick={() => setCount((c) => c + increment)}>
        Increment +{increment}
      </button>
      <p>Vous avez cliqué {count} fois.</p>
    </>
  )
}

export default Counter
