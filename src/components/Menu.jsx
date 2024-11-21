import * as React from 'react'
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import SortIcon from '@mui/icons-material/Sort'
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
								<FormatListBulletedIcon />
							</ListItemIcon>
							<ListItemText primary="Listado" onClick={handleClick} />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<SortIcon />
							</ListItemIcon>
							<ListItemText primary="Ranking" onClick={handleClick} />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<PlayCircleIcon />
							</ListItemIcon>
							<ListItemText primary="Partido" onClick={handleClick} />
						</ListItemButton>
					</ListItem>
				</List>
			</nav>
		</Box>
	)
}
