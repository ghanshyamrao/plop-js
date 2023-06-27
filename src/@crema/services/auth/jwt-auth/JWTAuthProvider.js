// import React, {createContext, useContext, useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
// import {useDispatch} from 'react-redux';
// import {useNavigate} from 'react-router-dom';
// import {createUserRoleFromAccessRight} from '../../../utility/helper/AuthHelper';

// import {
//   FETCH_ERROR,
//   FETCH_START,
//   FETCH_SUCCESS,
// } from '../../../../shared/constants/ActionTypes';
// import jwtAxios, {setAuthToken} from './jwt-api';

// const JWTAuthContext = createContext();
// const JWTAuthActionsContext = createContext();

// export const useJWTAuth = () => useContext(JWTAuthContext);

// export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

// const JWTAuthAuthProvider = ({children}) => {
//   const navigate = useNavigate();
//   const [firebaseData, setJWTAuthData] = useState({
//     user: null,
//     isAuthenticated: false,
//     isLoading: true,
//   });

//   const dispatch = useDispatch();

//   useEffect(() => {
//     const getAuthUser = () => {
//       const token = localStorage.getItem('token');
//       const userData = JSON.parse(localStorage.getItem('userData'));
//       if (!token) {
//         setJWTAuthData({
//           user: undefined,
//           isLoading: false,
//           isAuthenticated: false,
//         });
//         return;
//       }
//       setAuthToken(token);
//       if (token) {
//         setJWTAuthData({
//           user: userData,
//           isLoading: false,
//           isAuthenticated: true,
//         });
//       }
//     };

//     getAuthUser();
//   }, []);

//   const signInUser = async ({email, password}) => {
//     dispatch({type: FETCH_START});
//     try {
//       const {data} = await jwtAxios.post('auth/login', {email, password});
//       localStorage.setItem('token', JSON.stringify(data.data.token));
//       let userData = {
//         ...data.data,
//         userRole: ['ADMIN'],
//       };
//       setAuthToken(data.data.token);
//       if (data.data.companiesData.isCompany) {
//         const companyId = data.data?.companiesData?.userCompanies[0]?.id;
//         const userRoleAccessRights = await jwtAxios.get(
//           `users/role/${companyId}`,
//         );
//         const userRole = createUserRoleFromAccessRight(
//           userRoleAccessRights?.data?.data,
//         );
//         userData = {...userData, userRole: userRole};
//       }

//       localStorage.setItem('userData', JSON.stringify(userData));
//       setJWTAuthData({
//         user: userData,
//         isAuthenticated: true,
//         isLoading: false,
//       });
//       dispatch({type: FETCH_SUCCESS});
//     } catch (error) {
//       setJWTAuthData({
//         ...firebaseData,
//         isAuthenticated: false,
//         isLoading: false,
//       });
//       let errorMessage = '';
//       switch (error.response.status) {
//         case 400:
//           errorMessage = 'Please check your email and password';
//           break;
//         case 404:
//           errorMessage = 'Incorrect email or password';
//           break;
//         default:
//           errorMessage = 'Something went wrong, Please try again! ';
//           break;
//       }
//       dispatch({type: FETCH_ERROR, payload: errorMessage});
//     }
//   };

//   const signUpUser = async ({
//     name,
//     email,
//     phoneNumber,
//     password,
//     passwordConfirm,
//   }) => {
//     dispatch({type: FETCH_START});
//     try {
//       await jwtAxios.post('auth/register', {
//         name,
//         email,
//         phoneNumber,
//         password,
//         passwordConfirm,
//       });
//       navigate('/signin');
//       dispatch({type: FETCH_SUCCESS});
//     } catch (error) {
//       setJWTAuthData({
//         ...firebaseData,
//         isAuthenticated: false,
//         isLoading: false,
//       });
//       let errorMessage = '';
//       switch (error.response.status) {
//         case 400:
//           errorMessage =
//             'Your invitation expire or You have already register with this email';
//           break;
//         default:
//           errorMessage = 'Something went wrong, Please try again! ';
//           break;
//       }
//       dispatch({type: FETCH_ERROR, payload: errorMessage});
//     }
//   };

//   const logout = async () => {
//     localStorage.clear();
//     setAuthToken();
//     setJWTAuthData({
//       user: null,
//       isLoading: false,
//       isAuthenticated: false,
//     });
//     window.location.reload();
//   };

//   return (
//     <JWTAuthContext.Provider
//       value={{
//         ...firebaseData,
//       }}>
//       <JWTAuthActionsContext.Provider
//         value={{
//           signUpUser,
//           signInUser,
//           logout,
//         }}>
//         {children}
//       </JWTAuthActionsContext.Provider>
//     </JWTAuthContext.Provider>
//   );
// };
// export default JWTAuthAuthProvider;
// JWTAuthAuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
