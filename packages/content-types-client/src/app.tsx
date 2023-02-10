import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import * as React from 'react'

import { ContentTypeBuilderContainer } from './features/content-type-builder/content-type-builder.container'

export function App(): JSX.Element {
  return <Layout>
    <Content>
      <ContentTypeBuilderContainer />
    </Content>
  </Layout>
}
