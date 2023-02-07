import React, { useContext } from 'react'
import './inventoryTable.scss'
import { GlobalContext } from '../../context/GlobalState';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const InventoryTable = () => {

  const { inventory } = useContext(GlobalContext);


  return (
    <div>
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">Purchase Price&nbsp;($)</TableCell>
                <TableCell align="right">Listing Price&nbsp;($)</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {inventory.map((item) => (
                <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {item.name}
                </TableCell>
                <TableCell align="right">{item.purchasePrice}</TableCell>
                <TableCell align="right">{item.listingPrice}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

export default InventoryTable
