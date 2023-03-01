export const NUMBER_PROPERTY_TYPE_IDENTIFIER = 'number'
export const STRING_PROPERTY_TYPE_IDENTIFIER = 'string'

export const propertyTypes = [
  NUMBER_PROPERTY_TYPE_IDENTIFIER,
  STRING_PROPERTY_TYPE_IDENTIFIER,
] as const

export type PropertyType = typeof propertyTypes[number]
