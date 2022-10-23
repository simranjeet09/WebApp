import './about.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Star from '@mui/icons-material/Star';


 
function createData(
  name,
  proficiency
) {
  return { name, proficiency   };
}
const rows = [
  createData('Android', 5),
  createData('Kotlin', 5),
  createData('Java', 5),
  createData('React Native', 5),
  createData('React', 5),

 
];

function About() {
    return (
      <div>
        <h1>About me</h1>
          <div className="container">
            <div className='appImage'>
            <img src='https://simranjeet.dev/images/simar.jpg' className='image' alt="app image" />

            <p>Energetic and curiosity-driven Mobile app developer with 5+ years of experience writing top-quality clean code for high-paced businesses. Possess demonstrable ability to cultivate relationships with different stakeholders within an organization with empathetic communication skills and a penchant for solving problems. Eager to support your organization in modernizing its world-class products and delivering an incredible user experience.</p>

            </div>
            <div className="info">
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100  }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Skills</TableCell>
            <TableCell align="center">Proficiency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center"><Star className='icons'/><Star className='icons'/><Star className='icons'/><Star className='icons'/><Star className='icons'/></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           </div>
        </div>
      </div>
    )
}

export default About