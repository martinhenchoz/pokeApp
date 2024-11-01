// import {
// 	Button,
// 	Card,
// 	CardActionArea,
// 	CardActions,
// 	CardContent,
// 	CardMedia,
// } from '@mui/material'
// import { useFetchData } from '../hooks/useFetchData'

// export default function MyCard({ pokemon, index }) {
// 	const { data, loading } = useFetchData(pokemon.url)
// 	console.log(pokemon)

// 	return (
// 		<Card
// 			sx={{
// 				transition: '0.2s',
// 				'&:hover': {
// 					transform: 'scale(1.05)',
// 				},
// 			}}
// 		>
// 			<CardActionArea>
// 				<CardMedia
// 					component="img"
// 					image=
// 					height="200"
// 					alt="Card Image"
// 				/>
// 				<CardContent>
// 					<h2>{pokemon.name}</h2>
// 				</CardContent>
// 			</CardActionArea>

// 			<CardActions>
// 				<Button variant="contained">Detalles</Button>
// 			</CardActions>
// 		</Card>
// 	)
// }

// ------

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function MyCard({ pokemon, index }) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 200 }}
				image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					index + 1
				}.png`}
				title={pokemon.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h4" component="div">
					{pokemon.name}
				</Typography>
				<Typography variant="body2" sx={{ color: 'text.secondary' }}>
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Ver detalle</Button>
			</CardActions>
		</Card>
	)
}
