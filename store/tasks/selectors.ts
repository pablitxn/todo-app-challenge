import { createSelector } from 'reselect'

const getAllTasks = (state: { tasks: ITaskState }) => state.tasks
export const allTasksSelector = createSelector([getAllTasks], (tasks) => tasks)
