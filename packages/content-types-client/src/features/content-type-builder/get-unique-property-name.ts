import type { Property } from './content-type-builder.reducers'
import type { PropertyType } from './property-types'

function assembleName(baseIdentifier: string, suffix: number): string {
  return `${baseIdentifier}-${suffix++}`
}

function addUniqueSuffix(takenNames: string[], identifier: string, suffix: number): string {
  const attempt = assembleName(identifier, suffix)
  if(takenNames.includes(attempt)) {
    return addUniqueSuffix(takenNames, identifier, suffix + 1)
  }
  return attempt
}

export function getUniquePropertyName(properties: Property[], type: PropertyType): string {
  const firstAttempt = `my-${type}`
  const takenNames = properties.map(property => property.name)
  if(!takenNames.includes(firstAttempt)) {
    return firstAttempt
  }
  return addUniqueSuffix(takenNames, firstAttempt, 1)
}

