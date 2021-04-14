import React, { useState } from 'react'
/**
 * Increaser Component
 * 
 * Generates a button you can press to increase its value
 */
const Increaser =  () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <button className="e2e_increaser" onClick={() => setCounter(counter + 1)}>Press me!</button>
      <b className="e2e_increaser_result">{counter}</b>
    </div>
  )

}

export default Increaser