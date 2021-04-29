import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function userlist({users}) {
    return(
        
            
           <TableRow>
                <TableCell>{users.Id}</TableCell>
                <TableCell>{users.Name}</TableCell>
                <TableCell>{users.Email}</TableCell>
                <TableCell>{users.Role}</TableCell>
                <TableCell>{users.Permissions}</TableCell>
                <TableCell>{users.Actions}</TableCell>
            </TableRow>
            
        
    );
}
export default userlist;