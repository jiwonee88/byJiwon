import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import FullDialog from './FullDialog';

  //eslint-disable-next-line
  function createData(nickname, diffRate, cName, cCode, startDate, predictDate, an,fn,fs,usd,jpy,cny,kospi,kosdaq,dji,nas,shs,nii,separation,rsi,cci) {
  
    return {nickname, diffRate, cName, cCode, startDate, predictDate, an,fn,fs,usd,jpy,cny,kospi,kosdaq,dji,nas,shs,nii,separation,rsi,cci};
  }
  
const rows = [
    createData('India', 'IN', 1324171354, 3287263,1),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
    createData('AAAAAAa', 'BR', 210147125, 8515767),
    createData('1','2',3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1)
  ];
  
  
  const columns = [
    { id: 'nickname', label: 'Nickname', minWidth: 170 },
    { id: 'diffRate', label: '오차율', minWidth: 100 },
    {
      id: 'cName',
      label: '회사이름',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'cCode',
      label: '회사코드',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'startDate',
      label: '시작날짜',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    { id: 'predicDate', label: '예측날짜', minWidth: 170 },
    { id: 'an', label: 'agencyNetsales', minWidth: 170 },
    { id: 'fn', label: 'foreignNetsales', minWidth: 170 },
    { id: 'fs', label: 'fs', minWidth: 170 },
    { id: 'usd', label: 'usd', minWidth: 170 },
    { id: 'kospi', label: 'kospi', minWidth: 170 },
    { id: 'kosdaq', label: '코스닥', minWidth: 170 },
    { id: 'dji', label: 'dji', minWidth: 170 },
    { id: 'nas', label: 'nas', minWidth: 170 },
    { id: 'shs', label: 'shs', minWidth: 170 },
    { id: 'nii', label: 'nii', minWidth: 170 },
    { id: 'separation', label: 'separation', minWidth: 170 },
    { id: 'rsi', label: 'rsi', minWidth: 170 },
    { id: 'cci', label: 'cci', minWidth: 170 },
  
  
  ];
const useStyles = () => makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: '100%',
    },
  });

  
class TempApp2 extends Component {
    state = {username:'',message:''}
    constructor(props){
        super(props);
           
    


    }

    render() {

        const dialogInfo = {name:'default'}; 
        const handleClose = () => {
            dialogInfo.dialogOpen = false;
          };
    
        const classes = useStyles();

        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);
      
        const handleChangePage = (event, newPage) => {
          setPage(newPage);
        };
      
        const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
        };

        return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={()=>{alert(row)}}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} >
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <FullDialog open={this.state.dialogShown} info={dialogInfo} handleClose={handleClose}/>
      </Paper>
        );
    }
}

export default TempApp2;