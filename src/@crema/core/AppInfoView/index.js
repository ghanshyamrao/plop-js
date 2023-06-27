// import React, {useEffect} from 'react';
// import {message} from 'antd';
// import {useDispatch, useSelector} from 'react-redux';
// import {hideMessage} from '../../../redux/actions';
// import {AppLoader} from '../../../@crema';

// const AppInfoView = () => {
//   const {loading, error, displayMessage} = useSelector(({common}) => common);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (error) {
//       message.error(error);
//       dispatch(hideMessage());
//     }
//   }, [error]);

//   useEffect(() => {
//     if (displayMessage) {
//       message.success(displayMessage);
//       dispatch(hideMessage());
//     }
//   }, [displayMessage]);

//   return <>{loading ? <AppLoader /> : null}</>;
// };

// export default AppInfoView;
