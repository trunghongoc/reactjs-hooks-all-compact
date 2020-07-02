import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import App from './../../../App'
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs"
import store from './../../../store/__test__'
import StoryRouter from 'storybook-react-router'
import { storiesOf } from '@storybook/react'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
const mock = new MockAdapter(axios)

export default {
  title: 'App',
  component: App,
  decorators: [withKnobs]
}

// const Home = () => {
//   const url = 'https://httpbin.org/json'
//   const apiResponseData = { greeting: 'hello there' }
//   mock.onGet(url).reply(200, { test: 'some mock data' })

//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
// }

// const About = () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
// }

// export {
//   Home,
//   About
// }

storiesOf('App', module)
  .addDecorator(StoryRouter({
    initialEntry: '/'
  }))
  .add('Home', () => {
    const url = 'https://httpbin.org/json'

    useEffect(() => {
      mock.onGet(url).reply(200, { test: 'some mock data' })

      return () => mock.restore()
    })

    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  })

storiesOf('App', module)
  .addDecorator(StoryRouter({
    initialEntry: '/about'
  }))
  .add('About', () => (
    <Provider store={store}>
      <App />
    </Provider>
  ))
