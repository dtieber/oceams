import { describe, expect, it } from '@jest/globals'

import { getUniquePropertyName } from '../get-unique-property-name'

describe('get-unique-property-name', () => {
  it('returns my-[type] if name is not taken', () => {
    const newPropertyName = getUniquePropertyName([], 'string')

    expect(newPropertyName).toEqual('my-string')
  })

  it('returns my-[type]-1 if name is taken', () => {
    const newPropertyName = getUniquePropertyName([
      {
        name: 'my-string',
        propertyType:'string',
      },
    ], 'string')

    expect(newPropertyName).toEqual('my-string-1')
  })

  it('returns my-[type]-2 if name AND suffix -1 are taken ', () => {
    const newPropertyName = getUniquePropertyName([
      {
        name: 'my-string',
        propertyType:'string',
      },
      {
        name: 'my-string-1',
        propertyType:'string',
      },
    ], 'string')

    expect(newPropertyName).toEqual('my-string-2')
  })
})
