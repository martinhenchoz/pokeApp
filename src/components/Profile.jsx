import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useAppContext } from '../providers/DataProvider'

export default function Profile() {
	const [state] = useAppContext()

	return (
		state.profile.pokemon && (
			<Card>
				<CardMedia
					component="img"
					alt={state.profile.pokemon.name}
					height="240"
					image={state.profile.pokemon.image}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{state.profile.pokemon.name}
					</Typography>
				</CardContent>
			</Card>
		)
	)
}
