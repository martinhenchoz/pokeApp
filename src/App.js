import { styled } from '@mui/material/styles'
import { Box, Paper, Grid, Container } from '@mui/material'
import MyCard from './components/CardMui'
import { useFetchData } from './hooks/useFetchData'

function App() {
	const url = 'https://pokeapi.co/api/v2/pokemon'
	const { data, loading } = useFetchData(url)
	if (loading) {
		return <p>'Loading...'</p>
	} else {
		if (data) {
			return (
				<>
					<Container maxWidth="md">
						<h1>POKEAPP</h1>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={3} columns={24}>
								{data.results.map((pokemon, index) => (
									<Grid key={index} item xs={8}>
										<MyCard pokemon={pokemon} index={index} />
									</Grid>
								))}
							</Grid>
						</Box>
					</Container>
				</>
			)
		}
	}
}

export default App
