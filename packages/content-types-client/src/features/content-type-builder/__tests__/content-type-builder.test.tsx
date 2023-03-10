import { beforeAll, describe, expect, it, jest } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'

import { ContentTypeBuilder } from '../content-type-builder'
import type { AddPropertyAction, SetDomainAction, SetNameAction } from '../content-type-builder.action-types'

describe('content-type-builder', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it('displays fully qualified name of content type', () => {
    const mockAddProperty = (_:string): AddPropertyAction => ({} as AddPropertyAction)
    const mockSetDomain = (_:string): SetDomainAction => ({} as SetDomainAction)
    const mockSetName = (_:string): SetNameAction => ({} as SetNameAction)

    render(<ContentTypeBuilder
      domain='http://example.com'
      setDomain={mockSetDomain}
      name='FooContentType'
      setName={mockSetName}
      properties={[]}
      addProperty={mockAddProperty} />)

    expect(screen.getByRole('heading')?.textContent).toBe('http://example.com/FooContentType')
  })

  it('updates name of content-type', () => {
    const mockAddProperty = (_:string): AddPropertyAction => ({} as AddPropertyAction)
    const mockSetDomain = (_:string): SetDomainAction => ({} as SetDomainAction)
    const mockSetName = jest.fn() as (_: string) => SetNameAction

    const component = render(<ContentTypeBuilder
      domain='http://example.com'
      setDomain={mockSetDomain}
      name='FooContentType'
      setName={mockSetName}
      properties={[]}
      addProperty={mockAddProperty} />)
    const input = component.getByPlaceholderText('Name of your content type')
    fireEvent.change(input, { target: { value: 'NewComponentName' } })

    expect(mockSetName).toHaveBeenCalledWith('NewComponentName')
  })

  it('displays a list of all properties', () => {
    const mockAddProperty = (_:string): AddPropertyAction => ({} as AddPropertyAction)
    const mockSetDomain = jest.fn() as (_: string) => SetDomainAction
    const mockSetName = jest.fn() as (_: string) => SetNameAction
    const listOfProperties = [
      {
        name: 'my-property-name',
        propertyType: 'string',
      },
      {
        name: 'my-property-name2',
        propertyType: 'number',
      },
    ]

    const component = render(<ContentTypeBuilder
      domain='http://example.com'
      setDomain={mockSetDomain}
      name='FooContentType'
      setName={mockSetName}
      properties={listOfProperties}
      addProperty={mockAddProperty} />)

    expect(component.getByText('my-property-name')).toBeDefined()
    expect(component.getByText('my-property-name2')).toBeDefined()
  })

  it('updates domain of content-type', () => {
    const mockAddProperty = (_:string): AddPropertyAction => ({} as AddPropertyAction)
    const mockSetDomain = jest.fn() as (_: string) => SetDomainAction
    const mockSetName = (_:string): SetNameAction => ({} as SetNameAction)

    const component = render(<ContentTypeBuilder
      domain='http://example.com'
      setDomain={mockSetDomain}
      name='FooContentType'
      setName={mockSetName}
      properties={[]}
      addProperty={mockAddProperty} />)
    const input = component.getByPlaceholderText('Your domain')
    fireEvent.change(input, { target: { value: 'http://newdomain.com' } })

    expect(mockSetDomain).toHaveBeenCalledWith('http://newdomain.com')
  })
})
