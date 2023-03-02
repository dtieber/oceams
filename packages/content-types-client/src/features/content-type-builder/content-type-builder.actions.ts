import type { AddPropertyAction, SetNameAction } from './content-type-builder.action-types'
import { ADD_PROPERTY, SET_NAME } from './content-type-builder.action-types'
import type { PropertyType } from './property-types'

export function addProperty(name: string, propertyType: PropertyType): AddPropertyAction {
  return {
    type: ADD_PROPERTY,
    name,
    propertyType,
  }
}

export function setName(name: string): SetNameAction {
  return {
    type: SET_NAME,
    name,
  }
}

export type ContentTypeBuilderActions =
  typeof addProperty | typeof setName
