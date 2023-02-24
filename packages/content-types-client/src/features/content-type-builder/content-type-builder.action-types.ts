import type { PropertyType } from './property-types'

export const SET_NAME = 'contentTypeBuilderActionTypes/SET_NAME'
export interface SetNameAction {
  type: typeof SET_NAME;
  name: string;
}

export const ADD_PROPERTY = 'contentTypeBuilderActionTypes/ADD_PROPERTY'
export interface AddPropertyAction {
  type: typeof ADD_PROPERTY;
  name: string;
  propertyType: PropertyType;
}

export type ContentTypeBuilderActionTypes =
  | SetNameAction
  | AddPropertyAction
