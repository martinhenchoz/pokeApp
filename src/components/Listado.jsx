import Grid from '@mui/material/Grid2'
import MyCard from './Card'
import PaginationRounded from './Pagination'
import { useAppContext } from '../providers/DataProvider'
import { useFetchData } from '../hooks/useFetchData'
import { Box, CircularProgress, Stack } from '@mui/material'

export default function Listado() {
	const [state, dispatch] = useAppContext()
	const { datos, loading } = useFetchData(state.pokemons.url)

	const handleChange = (event, page) => {
		const offset = page === 1 ? '' : '?offset=' + page * 20 + '&limit=20'
		dispatch({
			type: 'SET_POKEMONS',
			data: {
				url: 'https://pokeapi.co/api/v2/pokemon' + offset,
				pages: Math.floor(datos.count / 20),
				actualPage: page,
			},
		})
	}

	if (loading) {
		return (
			<Box sx={{ display: 'flex' }}>
				<CircularProgress />
			</Box>
		)
	} else {
		return (
			datos && (
				<div>
					<Stack
						spacing={4}
						sx={{
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<h1>Listado de Pokemons</h1>
						<Grid container spacing={2} columns={{ xl: 12 }}>
							{datos.results.map((pokemon, index) => (
								<Grid key={index} xl={4}>
									<MyCard pokemon={pokemon} key={index} />
								</Grid>
							))}
						</Grid>
						<PaginationRounded handleChange={handleChange} />
					</Stack>
				</div>
			)
		)
	}
}
