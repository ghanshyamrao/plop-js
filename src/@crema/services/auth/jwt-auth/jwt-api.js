// import axios from 'axios';
// import {useEffect} from 'react';
// import {useJWTAuthActions} from './JWTAuthProvider';

// const jwtAxios = axios.create({
//   baseURL: 'https://tmapi.blobstation.com/v1', //YOUR_API_URL HERE
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// const AxiosInterceptor = ({children}) => {
//   const {logout} = useJWTAuthActions();
//   const unAuthorizedPaths = ['/signin', '/signup', '/forget-password'];
//   useEffect(() => {
//     const resInterceptor = (response) => {
//       if (!unAuthorizedPaths.includes(window.location.pathname)) {
//         setAuthToken(response.headers.token);
//       }
//       return response;
//     };

//     const errInterceptor = (err) => {
//       if (err.response.status === 401) {
//         logout();
//       }
//       if (err?.response?.data?.errors?.includes('Product not found.')) {
//         return Promise.resolve(err?.response);
//       }
//       return Promise.reject(err);
//     };
//     const interceptor = jwtAxios.interceptors.response.use(
//       resInterceptor,
//       errInterceptor,
//     );
//     return () => jwtAxios.interceptors.response.eject(interceptor);
//   }, []);
//   return children;
// };

// export const setAuthToken = (token) => {
//   if (token) {
//     jwtAxios.defaults.headers.common['Authorization'] = token;
//     localStorage.setItem('token', token);
//   } else {
//     delete jwtAxios.defaults.headers.common['Authorization'];
//     localStorage.removeItem('token');
//   }
// };

// export default jwtAxios;
// export {AxiosInterceptor};
