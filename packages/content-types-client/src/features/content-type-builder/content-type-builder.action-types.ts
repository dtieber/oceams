export const SET_NAME = 'contentTypeBuilderActionTypes/SET_NAME'
export interface SetNameAction {
  type: typeof SET_NAME;
  name: string;
}

export type ContentTypeBuilderActionTypes =
  | SetNameAction
