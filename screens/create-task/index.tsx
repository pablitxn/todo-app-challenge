import React, { FC } from 'react'
import { ICreateTask } from './types'
import { Container } from './styles'
import TaskForm from '../../components/task-form'

const CreateTask: FC<ICreateTask> = () => {
  const handleSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Container>
      <TaskForm onSubmit={handleSubmit} />
    </Container>
  )
}
export default CreateTask
