import { FieldNumberOutlined, FieldStringOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Input, List, Typography } from 'antd'
import * as React from 'react'

import { AddProperty } from './add-property'
import type { SetDomainAction, SetNameAction } from './content-type-builder.action-types'
import type { addProperty, setName } from './content-type-builder.actions'
import type { setDomain } from './content-type-builder.actions'
import type { ContentTypeBuilderState } from './content-type-builder.reducers'
import { getUniquePropertyName } from './get-unique-property-name'
import type { PropertyType } from './property-types'
import { NUMBER_PROPERTY_TYPE_IDENTIFIER, STRING_PROPERTY_TYPE_IDENTIFIER } from './property-types'

type ContentTypeBuilderProps = ContentTypeBuilderState &
    { setDomain: typeof setDomain} &
    { setName: typeof setName} &
    { addProperty: typeof addProperty}

type OnChange = { target: { value: string } }

export function ContentTypeBuilder(props: ContentTypeBuilderProps): JSX.Element {
  const { domain, setDomain, name, setName, properties, addProperty } = props

  const handleOnAddProperty = (type: PropertyType): void => {
    const uniquePropertyName = getUniquePropertyName(properties, type)
    addProperty(uniquePropertyName, type)
  }

  const getIcon = (type: string): JSX.Element => {
    switch(type) {
    case NUMBER_PROPERTY_TYPE_IDENTIFIER:
      return <FieldNumberOutlined />
    case STRING_PROPERTY_TYPE_IDENTIFIER:
      return <FieldStringOutlined />
    default:
      return <QuestionCircleOutlined />
    }
  }

  return <div>
    <Typography>
      <Typography.Title>{domain}/{name}</Typography.Title>
    </Typography>
    <Input
      placeholder='Your domain'
      value={domain}
      onChange={(e: OnChange): SetDomainAction => setDomain(e.target.value)}/>
    <Input
      placeholder='Name of your content type'
      value={name}
      onChange={(e: OnChange): SetNameAction => setName(e.target.value)}/>
    <AddProperty onAddProperty={handleOnAddProperty} />
    <List
      size='small'
      dataSource={properties}
      renderItem={(item): React.JSX.Element => <List.Item>{getIcon(item.propertyType)} {item.name}</List.Item>}>
    </List>
  </div>

}
