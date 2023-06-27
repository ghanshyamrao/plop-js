import React from 'react';
import collapseMotion from 'antd/lib/_util/motion';
import {Avatar} from 'antd';
import './index.style.less';
import AppScrollbar from '../../AppScrollbar';
import clsx from 'clsx';
import AppVerticalMenu from '../components/AppVerticalNav';
import {useSidebarContext} from '../../../utility/AppContextProvider/SidebarContextProvider';
import MainSidebar from '../components/MainSidebar';
// import {LogoutOutlined} from '@ant-design/icons';
import {useAuthMethod} from '@crema/utility/AuthHooks';
import logouticon from '../../../../assets/icon/logoutIcon.svg';

const AppSidebar = () => {
  const {isSidebarBgImage} = useSidebarContext();
  const {logout} = useAuthMethod();
  return (
    <MainSidebar
      breakpoint='lg'
      className={clsx('mini-sidebar', {
        'mini-sidebar-img-background': isSidebarBgImage,
      })}
      collapsed={collapseMotion}>
      <img
        src='/logo192.png'
        style={{
          margin: '25px 15px 65px 15px',
          width: '30px',
          height: '40px',
        }}></img>
      <AppScrollbar className='app-sidebar-mini-scrollbar' scrollToTop={false}>
        <AppVerticalMenu />
        <Avatar
          src='/userAvtar.png'
          style={{
            margin: '300px 15px 100px 15px',
          }}
        />
        <img
          src={logouticon}
          style={{color: 'white', fontSize: '20px', marginTop: '-70px'}}
          onClick={logout}
        />
      </AppScrollbar>
    </MainSidebar>
  );
};

export default AppSidebar;
