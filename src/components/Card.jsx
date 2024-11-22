import { useState } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useAppContext } from '../providers/DataProvider'
import Modal from './Modal'
import {
	Stack,
	Chip,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
	Typography,
} from '@mui/material'

export default function MyCard({ pokemon }) {
	const [showModal, setShowModal] = useState(false)
	const [, dispatch] = useAppContext()
	const { datos } = useFetchData(pokemon.url)

	const handleOpenModal = () => {
		setShowModal(true)
	}

	const handleCloseModal = () => {
		setShowModal(false)
	}

	const handleAceptarModal = () => {
		if (datos) {
			dispatch({
				type: 'SET_PROFILE',
				data: { pokemon: datos },
			})
			setShowModal(false)
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
	}

	return (
		datos && (
			<>
				<Card sx={{ minWidth: 250 }}>
					<div>
						<CardMedia
							sx={{ height: 250 }}
							image={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${datos.id
								.toString()
								.padStart(3, '0')}.png`}
							title={pokemon.name}
						/>
						<CardContent style={{ justifyContent: 'center' }}>
							<Typography gutterBottom variant="h4" component="div">
								{pokemon.name}
							</Typography>
							<Stack
								direction="row"
								spacing={1}
								style={{ justifyContent: 'center' }}
							>
								{datos.types.map((type, index) => (
									<Chip key={index} label={type.type.name} variant="outlined" />
								))}
							</Stack>
						</CardContent>

						<CardActions style={{ justifyContent: 'center' }}>
							<Button size="small" onClick={handleOpenModal}>
								Seleccionar
							</Button>
						</CardActions>
					</div>
				</Card>

				{showModal && (
					<Modal
						pokemon={pokemon}
						showModal={showModal}
						handleClose={handleCloseModal}
						handleAceptar={handleAceptarModal}
					/>
				)}
			</>
		)
	)
}
