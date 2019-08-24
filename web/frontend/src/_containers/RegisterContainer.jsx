import React from 'react'
import { connect } from 'react-redux'
import { RegisterPage } from '../_components'
import {
  getIsAuthenticated
} from '../_selectors'

const RegisterContainer = props => <RegisterPage {...props} />;

const connectedPostContainer = (RegisterContainer);
export { connectedPostContainer as RegisterContainer }
