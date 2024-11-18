import * as React from 'react'
import Grid from '@mui/material/Grid2'
import { Paper, Box, Container, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import DataProvider from './providers/DataProvider'
import { Outlet } from 'react-router-dom'
import Profile from './components/Profile'
import BasicMenu from './components/Menu'

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(3),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	...theme.applyStyles('dark', {
		backgroundColor: '#1Af027',
	}),
}))

export default function App() {
	return (
		<DataProvider>
			<Container maxWidth="xl">
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={3}>
						<Grid size={3}>
							<Stack spacing={4} sx={{ justifyContent: 'center' }}>
								<Item>
									<BasicMenu />
								</Item>
								<Profile />
							</Stack>
						</Grid>
						<Grid size="grow">
							<Item>
								<Outlet />
							</Item>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</DataProvider>
	)
}
