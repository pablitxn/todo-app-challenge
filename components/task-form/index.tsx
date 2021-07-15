import React, { FC, useState } from 'react'
import { ITaskForm } from './types'
import {
  Container,
  Label,
  TextInput,
  TimePickerContainer,
  TimeInput,
} from './styles'
import { View, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const TaskForm: FC<ITaskForm> = ({ onSubmit }) => {
  const [state, setState] = useState({
    title: '',
    deadline: '',
    remind: '',
    repeat: '',
  })

  const handleTitle = (input: string) => {
    setState((prev) => ({ ...prev, title: input }))
  }

  const handleDeadline = (input: string) => {
    setState((prev) => ({ ...prev, deadline: input }))
  }

  const handleRemind = (itemValue: string) => {
    setState((prev) => ({ ...prev, remind: itemValue }))
  }

  const handleRepeat = (itemValue: string) => {
    setState((prev) => ({ ...prev, repeat: itemValue }))
  }

  const handleSubmit = () => onSubmit(state)

  return (
    <Container>
      <View>
        <Label>Title</Label>
        <TextInput onChangeText={handleTitle} value={state.title} />
      </View>

      <View>
        <Label>Deadline</Label>
        <TextInput onChangeText={handleDeadline} value={state.deadline} />
      </View>

      <TimePickerContainer>
        <TimeInput>
          <Label>Start time</Label>
          <TextInput onChangeText={''} value="" />
        </TimeInput>
        <TimeInput>
          <Label>End time</Label>
          <TextInput onChangeText={''} value="" />
        </TimeInput>
      </TimePickerContainer>

      <View>
        <Label>Remind</Label>
        <Picker
          onValueChange={handleRemind}
          style={{
            height: '2rem',
          }}
        >
          <Picker.Item label="10 minutes early" value="10" />
          <Picker.Item label="15 minutes early" value="15" />
          <Picker.Item label="20 minutes early" value="20" />
          <Picker.Item label="25 minutes early" value="25" />
          <Picker.Item label="30 minutes early" value="30" />
        </Picker>
      </View>

      <View>
        <Label>Repeat</Label>
        <Picker
          onValueChange={handleRepeat}
          style={{
            height: '2rem',
          }}
        >
          <Picker.Item label="Weekly" value="weekly" />
          <Picker.Item label="Daily" value="daily" />
          <Picker.Item label="No repeat" value="no-repeat" />
        </Picker>
      </View>

      <View>
        <Button title="Create a  Task" onPress={handleSubmit} />
      </View>
    </Container>
  )
}

export default TaskForm
