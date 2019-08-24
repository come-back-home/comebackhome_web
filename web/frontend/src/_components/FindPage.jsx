import React from 'react'
import {Menu, Icon, Typography, Steps, Button, Input, Progress} from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { config } from '../config'

import classNames from 'classnames/bind'
import styles from './FindPage.scss'
import Camera from "react-camera/dist-es6";
const cx = classNames.bind(styles);
const { Title } = Typography;
const { Step } = Steps;

class FindPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      current: '',
      file: null,
      prev: null,
      exp: null,
      name: null,
      birth: null,
      age: null,
      call: null,
      percent: 0
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

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
      prev: null,
      exp: null,
      name: null,
      birth: null,
      age: null,
      call: null
    });
    console.log(event.target.files[0].name);
  }

  render() {
    return (
      <div className={cx('RegisterContainer')}>
        <div className={cx('top-wrapper')}>
          <img style={{ width: '100%' }}
               src={config.apiUrl + '/static/images/bg2.png'}
               alt='logo' />
          <div className={cx('text-wrapper')}>
            <div className={cx('img-wrapper')}>
              <div className={cx('img-div')}>
                <img src={this.state.file} className={cx('cur-img')}/>
                <h3>Cur Img</h3>
              </div>
              <div className={cx('img-div')}>
                <img src={this.state.prev} className={cx('prev-img')}/>
                <h3>Prev Img</h3>
              </div>
              <div className={cx('img-div')}>
                <img src={this.state.exp} className={cx('exp-img')}/>
                <h3>Exp Img</h3>
              </div>
            </div>
            <div className={cx('info-wrapper')}>
              <h1>
                {this.state.name}
              </h1>
              <h3>
                {this.state.birth}
              </h3>
              <h3>
                {this.state.age}
              </h3>
              <h3>
                {this.state.call}
              </h3>
            </div>
            <input type="file" onChange={this.handleChange}
                   className={cx('btn-uploadpic')}/>
          </div>
        </div>
      </div>
    )
  }
}
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
};


function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
    authentication,
    user
  }
}

const connectedContents = connect(mapStateToProps, {
})(FindPage);
export { connectedContents as FindPage }
