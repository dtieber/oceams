import { describe, expect, it } from '@jest/globals'

import { setName } from '../content-type-builder.actions'
import { reducers, selectContentTypeName } from '../content-type-builder.reducers'

describe('content-type-builder.reducers', () => {
  it('SET_NAME action updates the name', () => {
    const originalState = {
      name: 'oldName',
    }

    const setNameAction = setName('newName')
    const updatedState = reducers(originalState, setNameAction)

    expect(updatedState).toEqual({
      name: 'newName',
    })
  })

  it('selectContentTypeName selector returns name of content type', () => {
    const rootState = {
      contentTypeBuilder: {
        name: 'foo',
      },
    }

    expect(selectContentTypeName(rootState)).toEqual('foo')
  })
})
