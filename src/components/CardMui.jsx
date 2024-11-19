import { useState } from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useAppContext } from '../providers/DataProvider'
import Modal from './ModalMui'
import {
	Stack,
	Chip,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from '@mui/material'

export default function MyCard({ pokemon }) {
	const [showModal, setShowModal] = useState(false)
	const [, dispatch] = useAppContext()
	const { datos } = useFetchData(pokemon.url)

	console.log('CARD')

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
				data: {
					pokemon: datos,
				},
			})
			setShowModal(false)
		}
	}

	return (
		datos && (
			<>
				<Card sx={{ minWidth: 230 }}>
					<CardMedia
						sx={{ height: 150 }}
						// image={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${idx}.png`}
						image={datos.sprites.front_default}
						title={pokemon.name}
					/>

					<CardContent>
						<Typography gutterBottom variant="h4" component="div">
							{pokemon.name}
						</Typography>
						<Stack direction="row" spacing={1}>
							{datos.types.map((type, index) => (
								<Chip key={index} label={type.type.name} variant="outlined" />
							))}
						</Stack>
					</CardContent>

					<CardActions>
						<Button size="small" onClick={handleOpenModal}>
							Seleccionar
						</Button>
					</CardActions>
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
