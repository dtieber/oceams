export const STRING_PROPERTY_TYPE_IDENTIFIER = 'string'

export const propertyTypes = [
  STRING_PROPERTY_TYPE_IDENTIFIER,
] as const

export type PropertyType = typeof propertyTypes[number]
