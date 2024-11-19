import { Stack, Chip, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useAppContext } from '../providers/DataProvider'

export default function Profile() {
	const [state] = useAppContext()

	return (
		state.profile.pokemon && (
			<Card>
				<CardMedia
					component="img"
					alt={state.profile.pokemon.name}
					height="200"
					image={state.profile.pokemon.sprites.front_default}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{state.profile.pokemon.name}
					</Typography>
					<Stack direction="row" spacing={1}>
						{state.profile.pokemon.types.map((type, index) => (
							<Chip key={index} label={type.type.name} variant="outlined" />
						))}
					</Stack>
				</CardContent>
			</Card>
		)
	)
}
