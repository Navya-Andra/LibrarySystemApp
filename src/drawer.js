import React from 'react';
import { Drawer, Divider, IconButton }
	from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText }
	from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ReorderIcon from '@material-ui/icons/Reorder';
import AccountCircleIcon from
	'@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

const drawerWidth = 60;

const styles = {
sideNav: {
	marginTop: '-60px',
	zIndex: 1, /* Stay on top of everything */
	marginLeft: '0px',
	position: 'fixed',
},
link: {
	color: 'black',
	textDecoration: 'none',
}

};

export default class MarerialUIDrawer
	extends React.Component {
constructor(props) {
	super(props);
	this.state = {
	isDrawerOpened: false,
	};
}
// sets the drawer status to true when clicked
toggleDrawerStatus = () => {
	this.setState({
	isDrawerOpened: true,
	})
}
// Below function is for the drawer to close on click
closeDrawer = () => {
	this.setState({
	isDrawerOpened: false,
	})
}
render() {
	const { isDrawerOpened } = this.state;
	return (
	<div>
		<div style={styles.sideNav}>
			{/* initially sets the drawer status to true */}
			<IconButton onClick={this.toggleDrawerStatus}> 
			{/* if drawer is open no change(null), else display ReorderIcon */}
			 {!isDrawerOpened ? <ReorderIcon /> : null }
			</IconButton>
		</div>
		{/* thin line that groups contents in lists and layouts */}
		<Divider/>
		<Drawer
		variant="temporary"
        sx={{
          width: drawerWidth,
		//   the element will not shrink it will retain the width it needs and not wrap its content
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
		open={isDrawerOpened}
        onClose={this.closeDrawer}
		>
		<Link to='/' style={styles.link}>
			<List>
			<ListItem button key='Home'>
				{/* wrapper to apply list styles to an icon */}
				<ListItemIcon><HomeIcon/>
				</ListItemIcon>
				<ListItemText primary='Home' />
			</ListItem>
			</List>
		</Link>
		<Link to='/borrowbook' style={styles.link}>
			<List>
			<ListItem button key='Borrow-Books'>
				<ListItemIcon><LibraryBooksIcon/>
				</ListItemIcon>
				<ListItemText primary='Borrow-Books' />
			</ListItem>
			</List>
		</Link>
		<Link to='/mybooks' style={styles.link}>
		<List>
			<ListItem button key='MyBooks'>
			<ListItemIcon><AccountCircleIcon/>
			</ListItemIcon>
			<ListItemText primary='Mybooks' />
			</ListItem>
			</List>
		</Link>
		</Drawer>
	</div>
	);
}
}
