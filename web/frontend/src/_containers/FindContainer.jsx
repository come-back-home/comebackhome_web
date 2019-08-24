import React from 'react'
import { connect } from 'react-redux'
import { FindPage } from '../_components'
import {
  getIsAuthenticated
} from '../_selectors'

const FindContainer = props => <FindPage {...props} />;

const connectedPostContainer = (FindContainer);
export { connectedPostContainer as FindContainer }
