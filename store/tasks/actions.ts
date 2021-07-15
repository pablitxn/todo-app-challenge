import { CREATE_TASK } from './types'
import { AnyAction } from 'redux'

export const onCreateTask = (formData: IFormData): AnyAction => {
  return {
    type: CREATE_TASK,
    payload: formData,
  }
}
