import { Button, Form, Select } from 'antd'
import * as React from 'react'
import { useState } from 'react'

import type { PropertyType } from './property-types'
import { propertyTypes, STRING_PROPERTY_TYPE_IDENTIFIER } from './property-types'

type AddPropertyProps = {
  onAddProperty: (type: PropertyType) => void
}

export function AddProperty({ onAddProperty }: AddPropertyProps): JSX.Element {
  const [
    propertyType,
    setPropertyType,
  ] = useState(STRING_PROPERTY_TYPE_IDENTIFIER)

  return(
    <Form>
      <Select
        defaultValue={propertyType}
        options={propertyTypes.map(identifier => ({
          value: identifier,
          label: identifier,
        }))}
        onChange={setPropertyType}
      />
      <Button onClick={(): void => onAddProperty(propertyType as PropertyType)}>Add property</Button>
    </Form>)
}
