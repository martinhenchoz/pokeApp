import { Button, DialogActions } from '@mui/material'

export default function ModalButtons({handleClose}) {
	<DialogActions>
		<Button onClick={handleClose}>Cancelar</Button>
		<Button type="submit">Aceptar</Button>
	</DialogActions>
}