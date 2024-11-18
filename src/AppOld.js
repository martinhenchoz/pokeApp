import { Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import MyCard from './components/CardMui'
import { useFetchData } from './hooks/useFetchData'
import { AppProvider } from './providers/DataProvider'
import { useAppContext } from './providers/DataProvider'

function App() {
	const pokemon = useAppContext()
	const url = 'https://pokeapi.co/api/v2/pokemon'
	const { data, loading } = useFetchData(url)
	if (loading) {
		return <p>'Loading...'</p>
	} else {
		if (data) {
			return (
				<AppProvider>
					<Container fixed>
						<h1>POKEAPP {pokemon}</h1>
						<Grid container spacing={4} columns={{ sm: 8, md: 12 }}>
							{data.results.map((pokemon, index) => (
								<Grid key={index} xs={12} sm={6} md={4}>
									<MyCard pokemon={pokemon} key={index} index={index} />
								</Grid>
							))}
						</Grid>
					</Container>
				</AppProvider>
			)
		}
	}
}

export default App
