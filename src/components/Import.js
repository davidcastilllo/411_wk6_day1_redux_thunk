import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from "@material-ui/core"

const Import = (props) => {
    // fill out this component

    return (
     <>
        <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
        <Table>
         <TableHead>
          <TableRow>Id</TableRow>
          <TableRow>Make</TableRow>
          <TableRow>Actions</TableRow>
         </TableHead>
         <TableBody>
         { props.makes.map((make) => {
          return <>
          <TableRow key={make.MakeId}>
           <TableCell>{make.MakeId}</TableCell>
           <TableCell>{make.MakeName}</TableCell>
           <TableCell></TableCell>
          </TableRow>
         </>
         })}
         </TableBody>
        </Table>
     </>
    )
}

export default Import