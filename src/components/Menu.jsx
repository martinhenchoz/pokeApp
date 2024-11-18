import * as React from 'react'
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import { useNavigate } from 'react-router-dom'

export default function BasicMenu() {
	const navigate = useNavigate()

	const handleClick = e => {
		navigate('/' + e.target.innerText)
	}

	return (
		<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<nav aria-label="main mailbox folders">
				<List>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Listado" onClick={handleClick} />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
							<ListItemText primary="Ranking" onClick={handleClick} />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
							<ListItemText primary="Partido" onClick={handleClick} />
						</ListItemButton>
					</ListItem>
				</List>
			</nav>
		</Box>
	)
}
