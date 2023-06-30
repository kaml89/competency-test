import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { IAccount, IAccountType } from '../../types/account';

interface AccountsTableProps {
  accountsList: IAccount[];
  accountsTypesMap: Map<string, IAccountType>;
}

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: 600,
  },
}));

const AccountsTable = ({
  accountsList,
  accountsTypesMap,
}: AccountsTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow sx={{ fontWeight: 700 }}>
            <StyledTableCell sx={{ fontWeight: 700 }}>Name</StyledTableCell>
            <StyledTableCell align='right'>Profit & Loss</StyledTableCell>
            <StyledTableCell align='right'>Account Type</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {accountsList.map((account: IAccount) => (
            <TableRow
              key={account.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {account.name}
              </TableCell>
              <TableCell align='right'>{`${account.currency} ${account.profitLoss}`}</TableCell>
              <TableCell align='right'>
                {accountsTypesMap.get(account.accountType)?.title}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AccountsTable;
