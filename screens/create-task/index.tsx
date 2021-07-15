import React, { FC } from 'react'
import { ICreateTask } from './types'
import { Container } from './styles'
import TaskForm from '../../components/task-form'
import { useDispatch } from 'react-redux'
import { onCreateTask } from '../../store/tasks/actions'

const CreateTask: FC<ICreateTask> = () => {
  const d = useDispatch()
  const handleSubmit = (formData: IFormData) => {
    d(onCreateTask(formData))
  }

  return (
    <Container>
      <TaskForm onSubmit={handleSubmit} />
    </Container>
  )
}
export default CreateTask
