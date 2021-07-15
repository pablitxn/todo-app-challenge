import { Reducer } from 'redux'
import { CREATE_TASK } from './types'

const defaultState: ITaskState = {
  all: null,
  favorite: null,
  completed: null,
  uncompleted: null,
}

const tasksReducer: Reducer = (state = defaultState, action) => {
  const { data, type } = action
  switch (type) {
    case CREATE_TASK:
      return {
        ...state,
        allTasks: data,
      }
    default:
      return state
  }
}

export default tasksReducer
