import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useState } from "react";
import UserList from './userslist';
import {UserData} from './data';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
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
	const [flag, setflag] = useState(false);
	const [updatedIndex, setUpdatedIndex] = useState(0);
	// Deleting Users
	const deleteHandler = (id)=>{

		let newUser = Users.filter((user) => {
			if(user.Id !== id){
				return user;
			}

		});
		setUsers([...newUser]);
		console.log(newUser)
	}
	// Updating Users
	const updateHandler = (user, i) =>{
		setUpdatedIndex(i);
		setId(user.Id);
		setName(user.Name);
		setEmail(user.Email);
		setRole(user.Role);
		setPermissions(user.Permissions);
		setflag(true);
	}
	const updateUser =()=>{
		if(Id !== "" && Name !== '' && Email !== '' && Role !== '' && Permissions !== ''){
				
			
			let User ={
				Id,
				Name,
				Email,
				Role,
				Permissions
			}
		let updatedUsers = Users.map((us)=>{
			if(updatedIndex === us.index){

			}
			else{
				return us;
			}

		})
		setUsers([...updatedUsers]);
		setId("");
		setName("");
		setEmail("");
		setRole("");
		setPermissions("");
		setflag(false);
		}
	
	else{
		alert("No Fields Can Remain Empty");
	}
	}

	// Adding New Users
	const addUsers =()=>{
		if(Id !== "" && Name !== '' && Email !== '' && Role !== '' && Permissions !==''){
				
			
		let User ={
			Id,
			Name,
			Email,
			Role,
			Permissions
		}
	
	setUsers([...Users, User]);
	setId("");
	setName("");
	setEmail("");
	setRole("");
	setPermissions("");
	}

else{
	alert("No Fields Can Remain Empty");
}
	}
	
	
	
	
	
	return (
		<div>
		<Button id='toggle' variant="contained" color="primary" onClick={()=>{let a= document.getElementById('inputSection'); if(a.className =='hidden'){a.className='show'}else{a.className='hidden'}}}>
				<AddCircleOutlineIcon /> Add or Update User
			</Button>
			<div id="userInfo" >
			<h3 style={{textAlign:'center',}}>User Panel</h3>
			<hr/>
	
			<div id='inputSection' className='hidden'>
			<input type="text" value={Id}  placeholder="Enter User ID" onChange={(e) => setId(e.target.value)}/>
			<input type="text" value={Name} placeholder="Enter User Name" onChange={(e) => setName(e.target.value)}/>
			<input type="text" value={Email} placeholder="Enter User E-Mail" onChange={(e) => setEmail(e.target.value)}/>
			<input type="text" value={Role} placeholder="Enter User Role" onChange={(e) => setRole(e.target.value)}/>
			<input type="text" value={Permissions} placeholder="Enter User Permissions" onChange={(e) => setPermissions(e.target.value)}/> &nbsp;
			{flag ? 
			<Button variant="contained" color="primary" onClick={updateUser}>Update</Button>
			:
			<Button variant="contained" color="primary" onClick={addUsers}>Add User</Button>}
			
			</div>

			<TableContainer  >
				<Table style={useStyles.minWidth}>
					<TableHead>
						<TableRow>
						<TableCell ><strong>Sr.N0</strong></TableCell>
							<TableCell ><strong>ID</strong></TableCell>
							<TableCell ><strong>Name</strong></TableCell>
							<TableCell ><strong>E-Mail</strong></TableCell>
							<TableCell ><strong>Role</strong></TableCell>
							<TableCell ><strong>Permissions</strong></TableCell>
							<TableCell ><strong>Actions</strong></TableCell>
						</TableRow>
					</TableHead>
					{
                   Users.map((item, index)=>{
                       return(
                           <UserList users={item} index={index} deleteHandler={deleteHandler} updateHandler={updateHandler} />

                       );
                   })
               }
				</Table>
			</TableContainer>
		</div>
		</div>
	);
}
export default Testdata;