import { describe, expect, it } from '@jest/globals'

import { addProperty, setName } from '../content-type-builder.actions'
import { reducers, selectContentTypeName, selectProperties } from '../content-type-builder.reducers'

describe('content-type-builder.reducers', () => {
  it('ADD_PROPERTY action adds a property to an empty array of properties', () => {
    const originalState = {
      name: 'my-name',
      properties: [],
    }

    const setNameAction = addProperty('my-property-name', 'string')
    const updatedState = reducers(originalState, setNameAction)

    expect(updatedState).toEqual({
      name: 'my-name',
      properties: [
        {
          name: 'my-property-name',
          propertyType: 'string',
        },
      ],
    })
  })

  it('ADD_PROPERTY action adds a property', () => {
    const originalState = {
      name: 'my-name',
      properties: [
        {
          name: 'my-property-name',
          propertyType: 'string',
        },
      ],
    }

    const setNameAction = addProperty('another-property-name', 'string')
    const updatedState = reducers(originalState, setNameAction)

    expect(updatedState).toEqual({
      name: 'my-name',
      properties: [
        {
          name: 'my-property-name',
          propertyType: 'string',
        },
        {
          name: 'another-property-name',
          propertyType: 'string',
        },
      ],
    })
  })

  it('selectProperties selector returns list of properties', () => {
    const rootState = {
      contentTypeBuilder: {
        name: 'foo',
        properties: [
          {
            name: 'my-property-name',
            propertyType: 'string',
          },
        ],
      },
    }

    expect(selectProperties(rootState)).toEqual([
      {
        name: 'my-property-name',
        propertyType: 'string',
      },
    ])
  })

  it('SET_NAME action updates the name', () => {
    const originalState = {
      name: 'oldName',
      properties: [],
    }

    const setNameAction = setName('newName')
    const updatedState = reducers(originalState, setNameAction)

    expect(updatedState).toEqual({
      name: 'newName',
      properties: [],
    })
  })

  it('selectContentTypeName selector returns name of content type', () => {
    const rootState = {
      contentTypeBuilder: {
        name: 'foo',
        properties: [],
      },
    }

    expect(selectContentTypeName(rootState)).toEqual('foo')
  })
})
