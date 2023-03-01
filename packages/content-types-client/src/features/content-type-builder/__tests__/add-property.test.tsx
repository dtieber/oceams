import { describe, expect, it, jest } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'

import { AddProperty } from '../add-property'

describe('add-property', () => {
  it('fires an event with the selected property type when the `Add Property` button is clicked', () => {
    const onAddPropertySpy = jest.fn()

    render(<AddProperty onAddProperty={onAddPropertySpy}/>)
    fireEvent.click(screen.getByText('Add property'))

    expect(onAddPropertySpy).toHaveBeenCalledWith('string')
  })
})
