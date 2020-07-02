import React from 'react'
import MyCounter from './../MyCounter'
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs"

export default {
  title: 'MyCounter',
  component: MyCounter,
  decorators: [withKnobs]
}

const IncrementNotProps = () => {
  return (
    <MyCounter />
  )
}

const IncrementWithProps = () => {
  const label = 'Colors'
  const options = {
    red: 'red',
    blue: 'blue',
    yellow: 'yellow'
  }
  const defaultValue = 'red'
  const groupId = 'GROUP-COLOR-1'

  const value = select(label, options, defaultValue, groupId)

  return (
    <MyCounter color={value} />
  )
}

IncrementNotProps.story = {
  name: 'Not props',
}

export {
  IncrementNotProps,
  IncrementWithProps
}
