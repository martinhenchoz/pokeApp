import {
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material'
import React from 'react'
import ModalButtons from './ModalButtons'

export default function Modal({
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
				<ModalButtons handleClose={handleClose} />
			</Dialog>
		</React.Fragment>
	)
}
