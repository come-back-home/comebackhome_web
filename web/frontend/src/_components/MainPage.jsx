import React from 'react'
import { Menu, Icon, Typography, Steps, Button } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { config } from '../config'

import classNames from 'classnames/bind'
import styles from './MainPage.scss'
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
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
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
          </div>
        </div>
        <div className={cx('bottom-wrapper')}>
          <div className={cx('register-area')}>

          </div>
          <div className={cx('find-area')}>

          </div>
        </div>
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
