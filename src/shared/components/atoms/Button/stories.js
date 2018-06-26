import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './'

const onClick = () => console.log('clicked')

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={onClick}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={onClick}>
      <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
    </Button>
  ))