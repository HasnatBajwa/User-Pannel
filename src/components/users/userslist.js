import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

function userlist({ users, index, deleteHandler, updateHandler }) {
	return (
		<TableRow>
			<TableCell>{index}</TableCell>
			<TableCell>{users.Id}</TableCell>
			<TableCell>{users.Name}</TableCell>
			<TableCell>{users.Email}</TableCell>
			<TableCell>{users.Role}</TableCell>
			<TableCell>{users.Permissions}</TableCell>
			<TableCell>
				<Button variant="contained" color="primary" onClick={() => deleteHandler(users.Id)}>
					Delete
				</Button>
			</TableCell>
			<TableCell>
				<Button variant="contained" color="primary" onClick={() => updateHandler(users, index)}>
					Edit
				</Button>
			</TableCell>
		</TableRow>
	);
}
export default userlist;
