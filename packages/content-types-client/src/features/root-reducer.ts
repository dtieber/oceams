import { combineReducers } from '@reduxjs/toolkit'

import { reducers as contentTypeBuilderReducers } from './content-type-builder/content-type-builder.reducers'

export const rootReducer = combineReducers({
  contentTypeBuilder: contentTypeBuilderReducers,
})
