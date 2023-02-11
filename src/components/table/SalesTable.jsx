import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const SalesTable = () => {

  const { sales, deleteSale } = useContext(GlobalContext);

  return (
    <div>
       <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">Profit ($)</TableCell>
                <TableCell align="right">Purchase Price ($)</TableCell>
                <TableCell align="right">Listing Price ($)</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Date Sold</TableCell>
                <TableCell align="right">Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {sales.map((sale) => (
                <TableRow
                key={sale.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {sale.name}
                </TableCell>
                <TableCell sx={{color: (sale.listingPrice - sale.purchasePrice >= 0) ? '#1D8751' : '#E53E3E'}} align="right">{(sale.listingPrice - sale.purchasePrice) * sale.quantity}</TableCell>
                <TableCell align="right">{sale.purchasePrice}</TableCell>
                <TableCell align="right">{sale.listingPrice}</TableCell>
                <TableCell align="right">{sale.quantity}</TableCell>
                <TableCell align="right">{sale.dateAdded}</TableCell>
                <TableCell align="right" className="actionButtons"><button onClick={() => deleteSale(sale)}>X</button></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
       </TableContainer>
    </div>
  )
}

export default SalesTable
