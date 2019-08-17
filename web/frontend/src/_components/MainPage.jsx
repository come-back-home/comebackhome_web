import React from 'react'
import { Menu, Icon, Typography, Steps, Button } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { config } from '../config'

import classNames from 'classnames/bind'
import styles from './MainPage.scss'
import {RegisterPage} from "./RegisterPage";
const cx = classNames.bind(styles);
const { Title } = Typography;
const { Step } = Steps;

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: ''
    }
  }

  state = {
    loading: false,
    iconLoading: false,
    size: 'large'
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  menu_click = (e) => {
    if (this.state.status === 0) {  // check the test is running
      this.setState({location: e.key});
      switch (e.key) {
        case '1':
          this.setState({contents: <MainPage/>});
          break;
        case '2':
          this.setState({contents: <RegisterPage/>});
          break;
      }
    }
  };

  render() {
    return (
      <div className={cx('MainPageContainer')}>
        <div className={cx('top-wrapper')}>
          <img style={{ width: '100%' }}
               src={config.apiUrl + '/static/images/bg2.png'}
               alt='logo' />
          <div className={cx('text-wrapper')}>
            <Typography>
              <h1>Find my family and back to the home.</h1>
            </Typography>
            <Button type="ghost" size='large' className={cx('btn-register')}>
              Register
            </Button>
            <Button type="ghost" size='large' className={cx('btn-find')}>
              Find
            </Button>
          </div>
        </div>
        {/*
        <div className={cx('bottom-wrapper')}>
          <div className={cx('register-area')}>
            <h1>Register</h1>
          </div>
          <div className={cx('divider')}></div>
          <div className={cx('find-area')}>
            <h1>Find</h1>
          </div>
        </div>
        */}
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
    authentication,
    user
  }
}

const connectedContents = connect(mapStateToProps, {
})(MainPage);
export { connectedContents as MainPage }
