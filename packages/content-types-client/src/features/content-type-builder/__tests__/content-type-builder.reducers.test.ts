import { describe, expect, it } from '@jest/globals'

import { addProperty, setDomain, setName } from '../content-type-builder.actions'
import { reducers, selectContentTypeName, selectDomain, selectProperties } from '../content-type-builder.reducers'

describe('content-type-builder.reducers', () => {
  it('ADD_PROPERTY action adds a property to an empty array of properties', () => {
    const originalState = {
      domain: 'http://example.com',
      name: 'my-name',
      properties: [],
    }

    const setNameAction = addProperty('my-property-name', 'string')
    const updatedState = reducers(originalState, setNameAction)

    expect(updatedState).toEqual({
      domain: 'http://example.com',
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
      domain: 'http://example.com',
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
      domain: 'http://example.com',
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
        domain: 'http://example.com',
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

  it('SET_DOMAIN action updates the domain', () => {
    const originalState = {
      domain: 'http://old.com',
      name: 'name',
      properties: [],
    }

    const setNameAction = setDomain('http://new.com')
    const updatedState = reducers(originalState, setNameAction)

    expect(updatedState).toEqual({
      domain: 'http://new.com',
      name: 'name',
      properties: [],
    })
  })

  it('selectDomain selector returns domain name', () => {
    const rootState = {
      contentTypeBuilder: {
        domain: 'http://example.com',
        name: 'foo',
        properties: [],
      },
    }

    expect(selectDomain(rootState)).toEqual('http://example.com')
  })

  it('SET_NAME action updates the name', () => {
    const originalState = {
      domain: 'http://example.com',
      name: 'oldName',
      properties: [],
    }

    const setNameAction = setName('newName')
    const updatedState = reducers(originalState, setNameAction)

    expect(updatedState).toEqual({
      domain: 'http://example.com',
      name: 'newName',
      properties: [],
    })
  })

  it('selectContentTypeName selector returns name of content type', () => {
    const rootState = {
      contentTypeBuilder: {
        domain: 'http://example.com',
        name: 'foo',
        properties: [],
      },
    }

    expect(selectContentTypeName(rootState)).toEqual('foo')
  })
})
