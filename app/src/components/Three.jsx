import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Three = () => {
    var [name, setname] = useState("Name")
    const ti = () => {
        setname("Tina")
    }

    const mi = () => {
        setname("Mina")
    }

    const li = () => {
        setname("Lina")
    }
    // useEffect(() => {},[])
    useEffect(() => {
        mi()
    },[])

  return (
    <div>
          <Typography variant='h3'>WELCOME {name}</Typography>
          <Button variant='contained' color='success' onClick={ti}>Tina</Button>&nbsp; &nbsp;
          <Button variant='contained' color='success' onClick={mi}>Mina</Button>&nbsp; &nbsp;
          <Button variant='contained' color='success' onClick={li}>Lina</Button>&nbsp; &nbsp;


    </div>
  )
}

export default Three
