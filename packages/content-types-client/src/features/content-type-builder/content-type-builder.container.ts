import { connect } from 'react-redux'

import type { RootState } from '../../app/store'
import { ContentTypeBuilder } from './content-type-builder'
import { setName } from './content-type-builder.actions'
import type { ContentTypeBuilderState } from './content-type-builder.reducers'

const mapStateToProps = (state: RootState): ContentTypeBuilderState => ({ ...state.contentTypeBuilder })

const mapDispatch = { setName }

export const ContentTypeBuilderContainer = connect(
  mapStateToProps,
  mapDispatch,
)(ContentTypeBuilder)
