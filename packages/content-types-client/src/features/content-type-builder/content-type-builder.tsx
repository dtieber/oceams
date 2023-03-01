import { Input, List, Typography } from 'antd'
import * as React from 'react'

import { AddProperty } from './add-property'
import type { SetNameAction } from './content-type-builder.action-types'
import type { addProperty, setName } from './content-type-builder.actions'
import type { ContentTypeBuilderState } from './content-type-builder.reducers'
import { getUniquePropertyName } from './get-unique-property-name'
import type { PropertyType } from './property-types'

type ContentTypeBuilderProps = ContentTypeBuilderState & { setName: typeof setName} & { addProperty: typeof addProperty}

export function ContentTypeBuilder(props: ContentTypeBuilderProps): JSX.Element {
  const { name, setName, properties, addProperty } = props

  const handleOnAddProperty = (type: PropertyType): void => {
    const uniquePropertyName = getUniquePropertyName(properties, type)
    addProperty(uniquePropertyName, type)
  }

  return <div>
    <Typography>
      <Typography.Title>{name}</Typography.Title>
    </Typography>
    <Input
      placeholder='Name of your content type'
      value={name}
      onChange={(e): SetNameAction => setName(e.target.value)}/>
    <AddProperty onAddProperty={handleOnAddProperty} />
    <List
      size='small'
      dataSource={properties}
      renderItem={(item):JSX.Element => <List.Item>{item.name}</List.Item>}>
    </List>
  </div>

}
