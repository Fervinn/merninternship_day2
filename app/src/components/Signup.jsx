import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
const Signup = () => {
  return (
      <div>
          <Typography variant="h2" component="h2">Sign Up</Typography><br />
          <TextField label="Username" variant="outlined" /><br /><br />
          <TextField label="Password" variant="outlined" /><br /><br />
          <Button variant="contained" color='success'>Sign Up</Button>
    </div>
  )
}

export default Signup