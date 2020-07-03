import React, { useState, useEffect } from 'react'

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(setTime(new Date()));
    return () => clearTimeout(timer)
  })
  return <h2>useEffect examble: {time.toLocaleTimeString()}</h2>
}

export default EffectComponent;


/*




*/