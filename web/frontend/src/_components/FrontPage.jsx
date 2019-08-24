import React from 'react'
import { Menu, Icon, Typography, Steps, Button } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { config } from '../config'

import classNames from 'classnames/bind'
import styles from './MainPage.scss'
import {RegisterPage} from "./RegisterPage";
import {FindPage} from "./FindPage";

const cx = classNames.bind(styles);
const { Title } = Typography;
const { Step } = Steps;

class FrontPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: '',
      location: '',
      contents: <FrontPage />,  // default page
      status: 0  // whether the test is running
    };

    this.register_click = this.register_click.bind(this);
    this.find_click = this.find_click.bind(this);
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
          this.setState({contents: <RegisterPage/>});
          break;
        case '2':
          this.setState({contents: <FindPage/>});
          break;
      }
    }
  };

  register_click() {
    this.setState({location: '1'});
    this.setState({contents: <RegisterPage/>});
  }

  find_click() {
    this.setState({location: '2'});
    this.setState({contents: <FindPage/>});
  }

  render() {
    let contents = this.state.contents;
    return (
      <div className={cx('top-wrapper')}>
        <img style={{ width: '100%' }}
             src={config.apiUrl + '/static/images/bg2.png'}
             alt='logo' />
        <div className={cx('text-wrapper')}>
          <Typography>
            <h1>Find my family and back to the home.</h1>
          </Typography>
          <Link to='/family-register'>
            <Button type="ghost" size='large' key='1' onClick={this.register_click} className={cx('btn-register')}>
              Register
            </Button>
          </Link>
          <Link to='/find'>
          <Button type="ghost" size='large' key='2' onClick={this.find_click} className={cx('btn-find')}>
            Find
          </Button>
          </Link>
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
})(FrontPage);
export { connectedContents as FrontPage }
