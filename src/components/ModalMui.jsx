import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material'
import React from 'react'

export default function ModalMui({
	pokemon,
	showModal,
	handleClose,
	handleAceptar,
}) {
	return (
		<React.Fragment>
			<Dialog
				open={showModal}
				onClose={handleClose}
				PaperProps={{
					component: 'form',
					onSubmit: event => {
						event.preventDefault()
						handleAceptar()
					},
				}}
			>
				<DialogTitle>{pokemon.name}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						¿Estás seguro que querés seleccionar a {pokemon.name}?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>
					<Button type="submit">Aceptar</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	)
}
