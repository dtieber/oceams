import { describe, expect, it, jest } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'

import { ContentTypeBuilder } from '../content-type-builder'
import type { SetNameAction } from '../content-type-builder.action-types'

describe('content-type-builder', () => {
  it('displays name of content type', () => {
    const mockSetName = (_:string): SetNameAction => ({} as SetNameAction)

    render(<ContentTypeBuilder name='FooContentType' setName={mockSetName} />)
    
    expect(screen.getByRole('heading')?.textContent).toBe('FooContentType')
  })

  it('updates name of content-type', () => {
    const mockSetName = jest.fn() as (_: string) => SetNameAction

    const component = render(<ContentTypeBuilder name='FooContentType' setName={mockSetName} />)
    const input = component.getByPlaceholderText('Name of your content type')
    fireEvent.change(input, { target: { value: 'NewComponentName' } })

    expect(mockSetName).toHaveBeenCalledWith('NewComponentName')
  })
})
