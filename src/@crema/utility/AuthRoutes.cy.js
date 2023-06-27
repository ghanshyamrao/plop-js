import React from 'react'
import AuthRoutes from './AuthRoutes'

describe('<AuthRoutes />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AuthRoutes />)
  })
})