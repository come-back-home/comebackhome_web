import React from 'react'
import { connect } from 'react-redux'
import { MainPage } from '../_components'
import {
  getIsAuthenticated
} from '../_selectors'

const MainPageContainer = props => <MainPage {...props} />;

const connectedPostContainer = (MainPageContainer);
export { connectedPostContainer as MainPageContainer }
