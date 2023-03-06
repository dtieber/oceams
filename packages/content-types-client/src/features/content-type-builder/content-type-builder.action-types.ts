import type { PropertyType } from './property-types'

export const ADD_PROPERTY = 'contentTypeBuilderActionTypes/ADD_PROPERTY'
export interface AddPropertyAction {
  type: typeof ADD_PROPERTY;
  name: string;
  propertyType: PropertyType;
}

export const SET_DOMAIN = 'contentTypeBuilderActionTypes/SET_DOMAIN'
export interface SetDomainAction {
  type: typeof SET_DOMAIN;
  domain: string;
}

export const SET_NAME = 'contentTypeBuilderActionTypes/SET_NAME'
export interface SetNameAction {
  type: typeof SET_NAME;
  name: string;
}

export type ContentTypeBuilderActionTypes =
  | AddPropertyAction
  | SetDomainAction
  | SetNameAction
