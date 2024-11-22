import { createContext, useContext, useReducer } from 'react'

const AppContext = createContext()

export const useAppContext = () => {
	return useContext(AppContext)
}

const reducer = (state, action) => {
	// { type, data }
	switch (action.type) {
		case 'SET_POKEMONS': {
			return { ...state, pokemons: { ...action.data } }
		}
		case 'SET_PROFILE': {
			return { ...state, profile: { ...action.data } }
		}
		case 'SET_RANKING': {
			return { ...state, ranking: { ...action.data } }
		}
		case 'SET_MATCH': {
			return { ...state, match: { ...action.data } }
		}
		default:
		// no action
	}
	return state
}

const DataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {
		pokemons: {
			url: 'https://pokeapi.co/api/v2/pokemon',
			pages: 20,
			actualPage: 1,
		},
		profile: {
			pokemon: null,
		},
	})

	return (
		<AppContext.Provider value={[state, dispatch]}>
			{children}
		</AppContext.Provider>
	)
}

export default DataProvider
