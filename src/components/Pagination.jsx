import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import { useAppContext } from '../providers/DataProvider'

export default function PaginationRounded({ handleChange }) {
	const [state] = useAppContext()

	return (
		<Pagination
			count={state.pokemons.pages}
			defaultPage={state.pokemons.actualPage}
			variant="outlined"
			shape="rounded"
			color="primary"
			onChange={handleChange}
		/>
	)
}
