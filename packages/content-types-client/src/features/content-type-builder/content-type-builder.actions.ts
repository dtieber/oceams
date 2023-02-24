import type { AddPropertyAction, SetNameAction } from './content-type-builder.action-types'
import { ADD_PROPERTY, SET_NAME } from './content-type-builder.action-types'
import type { PropertyType } from './property-types'

export function setName(name: string): SetNameAction {
  return {
    type: SET_NAME,
    name,
  }
}

export function addProperty(name: string, propertyType: PropertyType): AddPropertyAction {
  return {
    type: ADD_PROPERTY,
    name,
    propertyType,
  }
}

export type ContentTypeBuilderActions =
  typeof setName | typeof addProperty
