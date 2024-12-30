import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count, setcount] = useState(0)

    const increment = () => {
        setcount(count + 1)    
    }
    
    const decrement = () => {
        setcount(count - 1)
    }

  return (
    <div>
          <Typography variant='h3'>Counter</Typography>
          <Typography variant='h4'>{count}</Typography>
          <Button variant='contained' color='success' onClick={increment}>+</Button>&nbsp; &nbsp;
          <Button variant='contained' color='success' onClick={decrement}>-</Button>

    </div>
  )
}

export default Counter
