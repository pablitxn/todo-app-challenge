import { Reducer } from 'redux'
import { CREATE_TASK } from './types'

const defaultState: ITaskState = {
  all: [],
  favorite: [],
  completed: [],
  uncompleted: [],
}

const tasksReducer: Reducer = (state = defaultState, action) => {
  const { payload, type } = action
  switch (type) {
    case CREATE_TASK:
      return {
        ...state,
        all: [...state.all, payload],
      }
    default:
      return state
  }
}

export default tasksReducer
