import { connect } from 'react-redux'

import type { RootState } from '../../app/store'
import { ContentTypeBuilder } from './content-type-builder'
import { addProperty, setDomain, setName } from './content-type-builder.actions'
import type { ContentTypeBuilderState } from './content-type-builder.reducers'

const mapStateToProps = (state: RootState): ContentTypeBuilderState => ({ ...state.contentTypeBuilder })

const mapDispatch = {
  addProperty,
  setDomain,
  setName,
}

export const ContentTypeBuilderContainer = connect(
  mapStateToProps,
  mapDispatch,
)(ContentTypeBuilder)
