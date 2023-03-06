import type { SetNameAction } from './content-type-builder.action-types'
import { SET_NAME } from './content-type-builder.action-types'

export function setName(name: string): SetNameAction {
  return {
    type: SET_NAME,
    name,
  }
}

export type ContentTypeBuilderActions =
  typeof setName
