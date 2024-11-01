import { useEffect, useState } from 'react'
import { getPokemonApi } from '../components/getPokemonApi'

export function useFetchData(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

	useEffect(() => {
		async function fetchData() {
			setData(null)
			const data = await getPokemonApi(url)
            setData(data)
		}

		setLoading(true)
		fetchData()
		setLoading(false)
	}, [url])

    return { data, loading }
}
