import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import clientsSlice from './clients'

import config from '../config'

const store = configureStore({
	reducer: {
		clients: clientsSlice,

	},
	middleware: [thunk, logger, ...getDefaultMiddleware()],
	// devTools: true
})

export default store
