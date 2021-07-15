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
  const [text, onChangeText] = useState('')
  const [number, onChangeNumber] = useState(null)

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const showDatePicker = () => setDatePickerVisibility(true)

  const hideDatePicker = () => setDatePickerVisibility(false)

  const handleConfirm = (date: any) => {
    console.warn('A date has been picked: ', date)
    hideDatePicker()
  }
  const [selectedLanguage, setSelectedLanguage] = useState()

  return (
    <Container>
      <View>
        <Label>Title</Label>
        <TextInput onChangeText={onChangeText} value={text} />
      </View>

      <View>
        <Label>Deadline</Label>
        <TextInput onChangeText={onChangeText} value="" />
      </View>

      <TimePickerContainer>
        <TimeInput>
          <Label>Start time</Label>
          <TextInput onChangeText={onChangeText} value="" />
        </TimeInput>
        <TimeInput>
          <Label>End time</Label>
          <TextInput onChangeText={onChangeText} value="" />
        </TimeInput>
      </TimePickerContainer>

      <View>
        <Label>Remind</Label>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
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
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
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
        <Button title="Create a  Task" onPress={() => {}} />
      </View>
    </Container>
  )
}

export default TaskForm
