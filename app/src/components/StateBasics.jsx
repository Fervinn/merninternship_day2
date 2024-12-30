import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name, setname] = useState("Fervin")
    var [nval, sval] = useState()
    
    const setval = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }

    const SubHandler = () => {
        sval(name)
    }
    
  return (
      <div>
          <Typography variant='h3'>Welcome {nval}</Typography>
          <TextField variant='outlined' onChange={setval} /><br />
          <Button variant='contained' onClick={SubHandler}>submit</Button>
    </div>
  )
}

export default StateBasics