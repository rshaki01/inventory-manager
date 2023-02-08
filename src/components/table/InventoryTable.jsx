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

  const { inventory, sellItem, deleteItem } = useContext(GlobalContext);

  return (
    <div>
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Purchase Price&nbsp;($)</TableCell>
                <TableCell align="right">Listing Price&nbsp;($)</TableCell>
                <TableCell align="right">Action</TableCell>
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
                  <TableCell align="right" className="actionButtons"><button onClick={() => sellItem(item)}>Sell</button>&nbsp;&nbsp;<button onClick={() => deleteItem(item)}>X</button></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default InventoryTable
