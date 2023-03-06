import type { RootState } from '../../app/store'
import type { ContentTypeBuilderActionTypes } from './content-type-builder.action-types'
import { SET_NAME } from './content-type-builder.action-types'

export type ContentTypeBuilderState = {
  name: string
}

const initialState: ContentTypeBuilderState = {
  name: 'new-content-type',
}

export const reducers = (state: ContentTypeBuilderState = initialState, action: ContentTypeBuilderActionTypes): ContentTypeBuilderState => {
  switch (action.type) {
  case SET_NAME:
    return {
      ...state,
      name: action.name,
    }
  default:
    return {
      ...state,
    }
  }
}

export const selectContentTypeName = (state: RootState): string => state.contentTypeBuilder.name