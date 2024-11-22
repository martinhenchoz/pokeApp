import {
	Stack,
	Chip,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'
import { useAppContext } from '../providers/DataProvider'

export default function Profile() {
	const [state] = useAppContext()
	const id = state.profile.pokemon.id.toString().padStart(3, '0')

	return (
		state.profile.pokemon && (
			<Card sx={{ minWidth: 300 }}>
				<CardMedia
					sx={{ display: 'flex', justifyContent: 'center', width: 250 }}
					component="img"
					alt={state.profile.pokemon.name}
					image={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${id}.png`}
				/>
				<CardContent>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Typography gutterBottom variant="h5">
							Mi Pokemon es: {state.profile.pokemon.name}
						</Typography>
					</div>

					<Stack
						direction="row"
						spacing={2}
						style={{ justifyContent: 'center' }}
					>
						{state.profile.pokemon.types.map((type, index) => (
							<Chip key={index} label={type.type.name} variant="outlined" />
						))}
					</Stack>
				</CardContent>
			</Card>
		)
	)
}
