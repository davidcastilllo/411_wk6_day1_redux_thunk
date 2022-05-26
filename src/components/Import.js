import React, {useState, useRef} from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Menu, MenuItem } from "@material-ui/core"
import { MoreVert } from '@material-ui/icons'


const Import = (props) => {

 const [anchorEl, setAnchorEl] = useState(null);
 let id = useRef(0)

 const handleClick = (event,e) => {
   setAnchorEl(event.currentTarget);
   id.current = e
 };

 const handleClose = () => {
   setAnchorEl(null);
   props.deleteMake()
 };


    return (
     <>
        <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
        <Table>
         <TableHead>
          <TableRow>
           <TableCell>Id</TableCell>
           <TableCell>Make</TableCell>
           <TableCell>Actions</TableCell> 
          </TableRow>
         </TableHead>
        
         <TableBody>
         { props.makes.map((make) => {
          return <>
          <TableRow key={make.MakeId}>
           <TableCell>{make.MakeId}</TableCell>
           <TableCell>{make.MakeName}</TableCell>
           <TableCell>
            <MoreVert aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => handleClick(e,make.MakeId)}/>
           </TableCell>
          </TableRow>
         </>
         })}
         </TableBody>
        </Table>

        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
        <MenuItem onClick={handleClose}>DeleteItem</MenuItem>
      </Menu>

     </>
    )
}

export default Import