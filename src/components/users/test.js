import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState } from "react";
import UserList from './userslist';
import {UserData} from './data';
import Button from '@material-ui/core/Button';
import './users.css';

const useStyles = makeStyles({
	table: {
		minWidth: 650
	}
});

function Testdata() {
	const [Users, setUsers] = useState(UserData);
	const [Id, setId] = useState("");
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Role, setRole] = useState("");
	const [Permissions, setPermissions] = useState("");
	const addUsers =()=>{
		let User ={
			Id,
			Name,
			Email,
			Role,
			Permissions
		}
	let listOfUsers = User;
	setUsers([...Users, listOfUsers]);
	}
	
	return (
		<div id="userInfo">
			<div id='inputSection'>
			<input type="text" placeholder="Enter User ID" onChange={(e) => setId(e.target.value)}/>
			<input type="text" placeholder="Enter User Name" onChange={(e) => setName(e.target.value)}/>
			<input type="text" placeholder="Enter User E-Mail" onChange={(e) => setEmail(e.target.value)}/>
			<input type="text" placeholder="Enter User Role" onChange={(e) => setRole(e.target.value)}/>
			<input type="text" placeholder="Enter User Permissions" onChange={(e) => setPermissions(e.target.value)}/> &nbsp;
			<Button variant="contained" color="primary" onClick={addUsers}>Add User</Button>
			</div>

			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell ><strong>ID</strong></TableCell>
							<TableCell ><strong>Name</strong></TableCell>
							<TableCell ><strong>E-Mail</strong></TableCell>
							<TableCell ><strong>Role</strong></TableCell>
							<TableCell ><strong>Permissions</strong></TableCell>
							<TableCell ><strong>Actions</strong></TableCell>
						</TableRow>
					</TableHead>
					{
                   Users.map((item)=>{
                       return(
                           <UserList users={item} />

                       );
                   })
               }
				</Table>
			</TableContainer>
		</div>
	);
}
export default Testdata;
