import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import { API_URL } from '../config'
import axios from 'axios'

export const fetchClients = createAsyncThunk(
	'clients/fetchAll',
	async () => {
		try{
			const response = await axios.get('http://localhost:8000' + '/clients')
			return response
		} catch (err) {
			return isRejectedWithValue({
				error: 'error at fetch clients'
			})
		}
	}
)

const clientsSlice = createSlice({
	name: 'clients',
	initialState: {
		loading: false,
		clients: []
	},
	reducers: {

	},
	extraReducers: {
		[fetchClients.pending]: (state, action) => {
			state.loading = true
		},
		[fetchClients.fulfilled]: (state, action) => {
			state.clients.push(action.payload)
		}
	}
})

const { actions, reducer } = clientsSlice


export default reducer