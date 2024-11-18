import Grid from '@mui/material/Grid2'
import MyCard from './CardMui'
import { useAppContext } from '../providers/DataProvider'
import { useFetchData } from '../hooks/useFetchData'
import PaginationRounded from './Pagination'
import { Stack } from '@mui/material'

export default function Listado() {
	const [state, dispatch] = useAppContext()
	const { datos, loading } = useFetchData(state.pokemons.url)

	const handleChange = (e, value) => {
		const offset = value * 20
		dispatch({
			type: 'SET_POKEMONS',
			data: {
				url: 'https://pokeapi.co/api/v2/pokemon?offset=' + offset + '&limit=20',
				count: datos.count,
				pages: Math.floor(datos.count / 20),
				actualPage: value,
			},
		})
		console.log('Pagina: ', state.pokemons.actualPage)
		console.log('Url: ', state.pokemons.url)
	}

	if (loading) {
		return <p>'Loading...'</p>
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
