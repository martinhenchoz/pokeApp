import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import { useAppContext } from '../providers/DataProvider'

export default function PaginationRounded({ handleChange }) {
	const [state] = useAppContext()
	const actualPage = state.pokemons.actualPage ?? 1

	return (
		<Pagination
			count={state.pokemons.pages}
			page={actualPage}
			variant="outlined"
			shape="rounded"
			color="primary"
			onChange={handleChange}
		/>
	)
}
