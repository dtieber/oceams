import type { AddPropertyAction, SetDomainAction, SetNameAction } from './content-type-builder.action-types'
import { ADD_PROPERTY, SET_DOMAIN, SET_NAME } from './content-type-builder.action-types'
import type { PropertyType } from './property-types'

export function addProperty(name: string, propertyType: PropertyType): AddPropertyAction {
  return {
    type: ADD_PROPERTY,
    name,
    propertyType,
  }
}

export function setDomain(domain: string): SetDomainAction {
  return {
    type: SET_DOMAIN,
    domain,
  }
}

export function setName(name: string): SetNameAction {
  return {
    type: SET_NAME,
    name,
  }
}

export type ContentTypeBuilderActions =
  typeof addProperty | typeof setDomain | typeof setName
