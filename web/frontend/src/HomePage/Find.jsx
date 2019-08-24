import React from 'react';
import { connect } from 'react-redux';
import { initEnvironment, userActions } from '../_actions';
import { NavContainer } from '../_containers';
import { LeftMenuContainer } from '../_containers';
import { MainPageContainer } from "../_containers/MainPageContainer";
import { RegisterContainer } from "../_containers";
import { FindContainer } from "../_containers";
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const cx = classNames.bind(styles);

class Find extends React.Component {
  constructor(props) {
    super(props);

    const { _initEnvironment } = props;

    console.log('in');
    _initEnvironment()
  }

  render() {
    return (
      <div className={cx('container')}>
        <NavContainer />
        <div className={cx('mainContainer')}>
          <FindContainer />
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

const connectedHomePage = connect(mapStateToProps, {
  _initEnvironment: initEnvironment,
  refresh: userActions.refresh
})(Find);
export { connectedHomePage as Find }
