import React from 'react'
import { Provider } from 'react-redux'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { render, fireEvent, screen, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import store from './../../store/__test__'
import * as actionTypes from './../../store/actions/actionTypes'

import Home from './../../pages/Home'

const apiResponseData = { greeting: 'hello there' }

const server = setupServer(
  rest.get('https://httpbin.org/json', (req, res, ctx) => {
    return res(ctx.json(apiResponseData))
  })
)

let Component
beforeAll(() => server.listen())
beforeEach(() => {
  store.dispatch({
    type: actionTypes.SET_BUTTON_COUNTER,
    number: 0
  })
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Home', () => {
  describe('props', () => {
    describe.each`
      condProps                           | expResult
      ${{ ahi: undefined }}               | ${'gì vậy mấy má ui'}
      ${{ ahi: "con mèo ngu's ngock's"}}  | ${"con mèo ngu's ngock's"}
      ${{ ahi: 'mèo méo meo mèo meo'}}    | ${'mèo méo meo mèo meo'}
    `('condProps = $condProps, expResult = $expResult',
      ({ condProps, expResult }) => {
      beforeEach(() => {
        Component = render(
          <Provider store={store}>
            <Home {...condProps} />
          </Provider>
        )
      })

      it(`p tag should be contain ${expResult}`, async () => {
        const { rerender, container, getByText } = Component

        const propsTag = screen.getByTestId('props-ahi')
        expect(propsTag.textContent).toBe(expResult)

        const newProps = {
          ahi: 'props mới của ahi'
        }
        rerender(
          <Provider store={store}>
            <Home {...newProps} />
          </Provider>
        )
        expect(propsTag.textContent).toBe(newProps.ahi)
      })
    })
  })

  describe('Increment', () => {
    beforeEach(() => {
      Component = render(
        <Provider store={store}>
          <Home />
        </Provider>
      )
    })

    it('Flow bellow should be right', async () => {
      const { container, getByText, getByTestId } = Component
      const btn = getByText('INCREMENT')
      const value = getByTestId('counter-disp')
      expect(value).toHaveTextContent('Counter: 0')

      fireEvent.click(btn)
      expect(value).toHaveTextContent('Counter: 1')

      fireEvent.click(btn)
      fireEvent.click(btn)
      expect(value).toHaveTextContent('Counter: 3')
    })
  })

  describe('Descrement', () => {
    beforeEach(() => {
      Component = render(
        <Provider store={store}>
          <Home />
        </Provider>
      )
    })

    it('Flow bellow should be right', async () => {
      const { getByText, getByTestId } = Component
      const btn = getByText('DESCREMENT')
      const value = getByTestId('counter-disp')
      expect(value).toHaveTextContent('Counter: 0')

      fireEvent.click(btn)
      expect(value).toHaveTextContent('Counter: -1')

      fireEvent.click(btn)
      fireEvent.click(btn)
      expect(value).toHaveTextContent('Counter: -3')
    })
  })

  describe('get data from api', () => {
    beforeEach(() => {
      Component = render(
        <Provider store={store}>
          <Home />
        </Provider>
      )
    })

    it('Flow bellow should be right', async () => {
      const { container, getByTestId } = Component
      const btn = getByTestId('saga-get-data')
      const value = getByTestId('saga-get-data-disp')
      expect(value.textContent.length < 40).toBe(true)

      fireEvent.click(btn)
      await waitForElement(() => getByTestId('saga-get-data-disp'))
      await waitForElement(() => getByTestId('saga-get-data-disp'))

      expect(JSON.parse(value.textContent).payload).toEqual(apiResponseData)
    })
  })
})
