import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Blog from '../blog/blog'
import Menu from '../menu/menu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Menu />
					<Typography variant="h6" className={classes.title}>
						User Panel
					</Typography>
					<Button color="inherit">Blog</Button>
					<Button color="inherit">About Us</Button>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
