import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { useQuery } from 'react-query';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LoopIcon from '@mui/icons-material/Loop';

const Percentage = () => {

  const fetchData = async () => {
    const response = await fetch('https://www.waamclub.com/admin/api/web/getPer');
    const data = await response.json();
    console.log(data.data)
    return data;
  }

  const { data, status } = useQuery('data', fetchData);

  return (
    <>{status === 'success' ?
      <div className="mi-table">
        <Typography className='card-row' component="div" >
          {data.data.map((item, index) => (
            <Card key={index} className='card'>
              <Typography component="h1" className='card-heading'>{item.usedFor}</Typography>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Heading</TableCell>
                      <TableCell align="right">Percentage</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow

                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Affiliate
                      </TableCell>

                      <TableCell align="right">{item.affiliate_Per} %</TableCell>
                    </TableRow>
                    <TableRow

                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Franchise
                      </TableCell>

                      <TableCell align="right">{item.franchise_Per} %</TableCell>
                    </TableRow>
                    <TableRow

                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        UPL-1
                      </TableCell>

                      <TableCell align="right">{item.upL1_Per} %</TableCell>
                    </TableRow>
                    <TableRow

                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        UPL-2
                      </TableCell>

                      <TableCell align="right">{item.upL2_Per} %</TableCell>
                    </TableRow>
                    <TableRow

                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Consultant
                      </TableCell>

                      <TableCell align="right">{item.consultant_Per} %</TableCell>
                    </TableRow>
                    <TableRow

                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Amount
                      </TableCell>

                      <TableCell align="right">{item.amount} %</TableCell>
                    </TableRow>
                    <TableRow

                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="right"><Link to={`/set-percentage/${item.id}`}> <button className="main-btn" align="right">Update</button></Link></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          ))}

        </Typography>
      </div>
      : status === 'loading' ? (
        <div className="loading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><LoopIcon style={{ fontSize: '5rem' }} /></div>
      ) : (
        <div className="loading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>Error!</div>
      )}
    </>
  )
}

export default Percentage