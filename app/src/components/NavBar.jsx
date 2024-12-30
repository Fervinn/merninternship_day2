import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, Links } from 'react-router-dom'

const NavBar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant="h6">Home</Typography>
                  <Link to='/login'>
                      <Button variant="contained" color='success'>Login</Button>
                  </Link>&nbsp; &nbsp;
                  <Link to='/signup'>
                      <Button variant="contained" color='success'>Sign Up</Button>
                  </Link>&nbsp; &nbsp;
                  <Link to='/library'>
                      <Button variant="contained" color='success'>Books</Button>
                  </Link>&nbsp; &nbsp;
                  <Link to='/state'>
                      <Button variant="contained" color='success'>State</Button>
                  </Link>&nbsp; &nbsp;
                  <Link to='/counter'>
                      <Button variant="contained" color='success'>Counter</Button>

                  </Link>&nbsp; &nbsp;
                  <Link to='/three'>
                      <Button variant='contained' color='success'>Three</Button>
                  </Link>&nbsp; &nbsp;
                  <Link to='/api'>
                      <Button variant='contained' color='success'>Api</Button>
                  </Link>&nbsp; &nbsp;
                  <Link to='/product'>
                      <Button variant='contained' color='success'>Product</Button>
                  </Link>
              </Toolbar>
          </AppBar><br /><br /><br />
    </div>
  )
}

export default NavBar