import type { RootState } from '../../app/store'
import type { ContentTypeBuilderActionTypes } from './content-type-builder.action-types'
import { ADD_PROPERTY, SET_DOMAIN, SET_NAME } from './content-type-builder.action-types'

export type Property = {
  name: string
  propertyType: string
}

export type ContentTypeBuilderState = {
  domain: string
  name: string
  properties: Property[]
}

const initialState: ContentTypeBuilderState = {
  domain: 'http://example.com/',
  name: 'new-content-type',
  properties: [],
}

export const reducers = (state: ContentTypeBuilderState = initialState, action: ContentTypeBuilderActionTypes): ContentTypeBuilderState => {
  switch (action.type) {
  case ADD_PROPERTY:
    return {
      ...state,
      properties: [
        ...state.properties,
        {
          name: action.name,
          propertyType: action.propertyType,
        },
      ],
    }
  case SET_DOMAIN:
    return {
      ...state,
      domain: action.domain,
    }
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
export const selectDomain = (state: RootState): string => state.contentTypeBuilder.domain
export const selectProperties = (state: RootState): Property[] => state.contentTypeBuilder.properties
