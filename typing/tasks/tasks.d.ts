interface ITaskState {
  all: Task[]
  favorite: Task[]
  completed: Task[]
  uncompleted: Task[]
}

interface Task {
  title: string
  deadline: string
  remind: string
  repeat: string
  startTime: string
  endTime: string
}
