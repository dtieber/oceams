import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from '../features/root-reducer'
import { rootSaga } from '../features/root-saga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [
  sagaMiddleware,
]

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk:false }).concat(middlewares),
  reducer: rootReducer,
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
