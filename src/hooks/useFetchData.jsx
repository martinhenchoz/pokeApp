import { useEffect, useState } from 'react'
import { getPokemonApi } from '../components/getPokemonApi'

export function useFetchData(url) {
	const [datos, setDatos] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		async function fetchData() {
			setDatos(null)
			const datos = await getPokemonApi(url)
			setDatos(datos)
		}
		setLoading(true)
		fetchData()
		setLoading(false)
	}, [url])

	return { datos, loading }
}
