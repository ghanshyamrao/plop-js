import React from 'react';
import {Dropdown, Input, Layout, Menu, Breadcrumb} from 'antd';
import './index.style.less';
import {FiMoreVertical} from 'react-icons/fi';
import {AiOutlineMenu} from 'react-icons/ai';
// import AppLogo from '../components/AppLogo';
// import routesConfig from 'pages/routeConfig';
import {useIntl} from 'react-intl';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppHeaderMessages from '../../AppHeaderMessages';
import AppNotifications from '../../AppNotifications';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';

const AppHeader = ({showDrawer}) => {
  const {Header} = Layout;
  const {Search} = Input;
  const {messages} = useIntl();
  const location = useLocation();
  const currentRoutePathArray = location.pathname.split('/');
  const routes = currentRoutePathArray
    .map((item) => {
      if (item) {
        return {
          path: item,
          name: item,
        };
      } else {
        return {
          item: '',
          name: '',
        };
      }
    })
    .filter((item) => item.item != '');

  const itemRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span style={{color: '#6A67CE'}}>{route.name}</span>
    ) : (
      <Link to={paths.join('/')}>{route.name}</Link>
    );
  };

  const menuMobile = (
    <Menu>
      <AppHeaderMessages />
      <AppNotifications />
      <AppLanguageSwitcher />
    </Menu>
  );

  return (
    <Header className='app-header-mini'>
      <a className='trigger' onClick={showDrawer}>
        <AiOutlineMenu />
      </a>
      <Breadcrumb itemRender={itemRender} routes={routes} separator='>' />

      <Search
        className='header-search-mini'
        placeholder={messages['common.searchHere']}
      />
      {/* <div className='app-header-mini-sectionDesktop'>
        <AppLanguageSwitcher />
        <AppHeaderMessages />
        <AppNotifications />
      </div> */}
      <div className='app-header-mini-section-mobile'>
        <Dropdown overlay={menuMobile} trigger={['click']}>
          <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
            <FiMoreVertical />
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  showDrawer: PropTypes.func,
};
