import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// props will include a `user` object or empty object
// props will include a `component` as `Component` or a `render`
// all other props that may be passed in are `..rest`
const AuthenticatedRoute = ({
  user,
  component: Component,
  render,
  ...rest
}) => (
  // if props include a `user` object and a `render` then create route with `render`
  // if props include a `user` object but no `render` then create route with `Component`
  // if props do not include a `user` object then redirect to home
  user
    ? (
      render
        ? (
          <Route {...rest} render={render} />
        )
        : (
          <Route {...rest} component={Component} />
        )
    )
    : (
      <Route render={() => <Redirect to='/sign-in' />} />
    )
)

export default AuthenticatedRoute
