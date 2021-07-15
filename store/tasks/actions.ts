import { CREATE_TASK } from './types'
import { AnyAction } from 'redux'

export const onCreateTask = (data: IFormData): AnyAction => {
  return {
    type: CREATE_TASK,
    data,
  }
}
