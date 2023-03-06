import { Input, Typography } from 'antd'
import * as React from 'react'

import type { SetNameAction } from './content-type-builder.action-types'
import type { setName } from './content-type-builder.actions'
import type { ContentTypeBuilderState } from './content-type-builder.reducers'

export function ContentTypeBuilder(props: ContentTypeBuilderState & { setName: typeof setName}): JSX.Element {
  const { name, setName } = props
  return <div>
    <Typography>
      <Typography.Title>{name}</Typography.Title>
    </Typography>
    <Input
      placeholder='Name of your content type'
      value={name}
      onChange={(e): SetNameAction => setName(e.target.value)}/>
  </div>

}
