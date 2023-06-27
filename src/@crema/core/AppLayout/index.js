// import React, {useEffect} from 'react';
// import {Layout} from 'antd';
// import {useUrlSearchParams} from 'use-url-search-params';
// import './layout.style.less';
// import {AppContentView} from '../../index';
// import Layouts from './Layouts';
// import {LayoutType} from '../../../shared/constants/AppEnums';
// import AppScrollbar from '../AppScrollbar';
// import {
//   useLayoutActionsContext,
//   useLayoutContext,
// } from '../../utility/AppContextProvider/LayoutContextProvider';
// import {useAuthUser} from '../../utility/AuthHooks';
// import {useSidebarActionsContext} from '../../utility/AppContextProvider/SidebarContextProvider';

// const AppLayout = () => {
//   const {user, isAuthenticated} = useAuthUser();
//   const {navStyle, layoutType} = useLayoutContext();
//   const {updateNavStyle} = useLayoutActionsContext();
//   const {updateMenuStyle, setSidebarBgImage} = useSidebarActionsContext();
//   const [params] = useUrlSearchParams();
//   const AppLayout = Layouts[navStyle];
//   const companyId = localStorage.getItem('companyId');

//   useEffect(() => {
//     if (layoutType === LayoutType.BOXED) {
//       document.body.classList.add('boxedLayout');
//       document.body.classList.remove('framedLayout');
//     } else if (layoutType === LayoutType.FRAMED) {
//       document.body.classList.remove('boxedLayout');
//       document.body.classList.add('framedLayout');
//     } else {
//       document.body.classList.remove('boxedLayout');
//       document.body.classList.remove('framedLayout');
//     }
//   }, [layoutType]);

//   useEffect(() => {
//     if (params.layout) updateNavStyle(params.layout);
//     if (params.menuStyle) updateMenuStyle(params.menuStyle);
//     if (params.sidebarImage) setSidebarBgImage(true);
//   }, []);
//   return (
//     <div style={{position: 'relative'}}>
//       <React.Fragment>
//         {isAuthenticated ? (
//           user?.companiesData?.isCompany || companyId ? (
//             <AppLayout />
//           ) : (
//             <Layout className='auth'>
//               <AppScrollbar className='main-auth-scrollbar'>
//                 <AppContentView />
//               </AppScrollbar>
//             </Layout>
//           )
//         ) : (
//           <Layout className='auth'>
//             <AppScrollbar className='main-auth-scrollbar'>
//               <AppContentView />
//             </AppScrollbar>
//           </Layout>
//         )}
//       </React.Fragment>
//     </div>
//   );
// };

// export default React.memo(AppLayout);
