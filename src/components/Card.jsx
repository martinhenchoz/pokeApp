import { useEffect, useState } from 'react'
import { getPokemonApi } from "./getPokemonApi"

function Card({url}) {
    console.log(url);
    
    const [data, setData] = useState(null)
    useEffect(() => {
		async function fetchData() {
			setData(null)
			const data = await getPokemonApi(url)
			if (!ignore) {
				setData(data)
                console.log(data);
			}
		}

		let ignore = false
		fetchData()
		return () => {
			ignore = true
		}
	}, [])

    if (data) {
        return (
            <div>
                <h1>{data.name}</h1>
                <h5>Base Experience: {data.base_experience}</h5>
                <h5>Weight: {data.weight}</h5>
                <img src={data.sprites.front_default} />
            </div>
        )    
    } else {
        return (
            <div>Loading</div>
        )
    }
    
}

export default Card
