import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Library = () => {
  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Book Id</TableCell>
                          <TableCell>Book Name</TableCell>
                          <TableCell>Author</TableCell>
                          <TableCell>Price</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow>
                          <TableCell>001</TableCell>
                          <TableCell>Harry Potter</TableCell>
                          <TableCell>JK Rowling</TableCell>
                          <TableCell>1000</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell>002</TableCell>
                          <TableCell>1984</TableCell>
                          <TableCell>George Orwell</TableCell>
                          <TableCell>800</TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default Library
